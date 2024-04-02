import { useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";

import { Input, InputAdornment, MenuItem, Select, SelectChangeEvent } from "@material-ui/core";

import { CEPData, dataProps, initialCEPData, initialData, selectStyles } from "../../constants/enterprise";

import { useAppContext } from "../../context/AppContext";

import { Container, ContentContainer } from "./styles";

interface EnterpriseFormProps {
    isAdd?: boolean;
    oldData?: dataProps;
}

export default function EnterpriseForm({ isAdd, oldData = initialData }: EnterpriseFormProps) {
    const [launch, setLaunch] = useState<string>(oldData.launch ?? 'launch');
    const [name, setName] = useState<string>(oldData.name);
    const [purpose, setPurpose] = useState<string>(oldData.purpose ?? 'HOME');
    const [cep, setCep] = useState<string>(oldData.address.cep)
    const [cepFetchResult, setCepFetchResult] = useState<CEPData>(initialCEPData);
    const [addressNumber, setAddressNumber] = useState<number | undefined>(oldData?.address?.number);
    const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

    const {
        setIsHome,
        setIsAddingEnterprises,
        setIsEditingEnterprises,
    } = useAppContext();

    if (oldData && isFirstLoad) {
        setIsFirstLoad(false)
        fetchCEPData(oldData.address.cep)
    }

    const handleLaunchChange = (event: SelectChangeEvent<string>) => {
        setLaunch(event.target.value);
    };

    const handleResidentialChange = (event: SelectChangeEvent<string>) => {
        setPurpose(event.target.value);
    };

    function cepValidation(cepData: string) {
        setCep(cepData)

        cepData.length < 8
            ? setCepFetchResult(initialCEPData)
            : fetchCEPData(cepData)
    }

    async function fetchCEPData(cepData: string) {
        try {
            const response = await axios.get(`http://viacep.com.br/ws/${cepData}/json/`)
            setCepFetchResult(response.data)
            return response.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error(err.message);
            } else {
                console.error((err as Error).message);
            }
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = {
            name,
            launch,
            purpose,
            address: {
                street: cepFetchResult.logradouro,
                number: addressNumber,
                district: cepFetchResult.bairro,
                city: cepFetchResult.localidade,
                state: cepFetchResult.uf,
                cep: cep
            }
        }

        if (isAdd) {
            await axios.post(`${process.env.NEXT_PUBLIC_ENTERPRISES_API}/enterprises`, formData)
                .then(() => {
                    toast.success('Empreendimento adicionado com sucesso!', {
                        duration: 5000,
                    });
                    setIsHome(true)
                    setIsAddingEnterprises(false)
                })
                .catch(() => {
                    toast.error('Ocorreu um erro ao adicionar o empreendimento!', {
                        duration: 5000,
                    });
                })
        } else {
            await axios.put(`${process.env.NEXT_PUBLIC_ENTERPRISES_API}/enterprises/${oldData.id}`, formData)
                .then(() => {
                    toast.success('Empreendimento atualizado com sucesso!', {
                        duration: 5000,
                    });
                    setIsHome(true)
                    setIsEditingEnterprises(false)
                })
                .catch(() => {
                    toast.error('Ocorreu um erro ao atualizar o empreendimento!', {
                        duration: 5000,
                    });
                })
        }
    }

    return (
        <Container>
            <ContentContainer>
                Informações

                <form onSubmit={handleSubmit}>
                    <Select
                        fullWidth
                        id="launch"
                        value={launch}
                        onChange={(event) => handleLaunchChange(event)}
                        startAdornment={
                            <InputAdornment position="start" />
                        }
                        sx={selectStyles}
                    >
                        <MenuItem disabled value="">
                            Lançamento
                        </MenuItem>
                        <MenuItem value="soonLaunch">Breve lançamento</MenuItem>
                        <MenuItem value="launch">Lançamento</MenuItem>
                        <MenuItem value="inWorks">Em obras</MenuItem>
                        <MenuItem value="readyToLive">Pronto pra morar</MenuItem>
                    </Select>
                    <Input
                        fullWidth
                        id="enterpriseName"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Nome do empreendimento"
                        startAdornment={
                            <InputAdornment position="start" />
                        }
                    />
                    <Select
                        fullWidth
                        id="purpose"
                        value={purpose}
                        onChange={(event) => handleResidentialChange(event)}
                        sx={selectStyles}
                    >
                        <MenuItem disabled value="">
                            <em>Residencial</em>
                        </MenuItem>
                        <MenuItem value="HOME">Residencial</MenuItem>
                        <MenuItem value="COMMERCIAL">Comercial</MenuItem>
                    </Select>
                    <Input
                        fullWidth
                        id="zipCode"
                        placeholder="CEP"
                        value={cep}
                        inputProps={{ maxLength: 8 }}
                        onChange={(event) => cepValidation(event.target.value)}
                        startAdornment={
                            <InputAdornment position="start" />
                        }
                    />

                    <p>{cepFetchResult.logradouro}</p>
                    <p>{cepFetchResult.bairro}</p>
                    <p>{cepFetchResult.localidade}</p>
                    <p>{cepFetchResult.uf}</p>

                    <Input
                        fullWidth
                        id="number"
                        placeholder="Número"
                        value={addressNumber}
                        onChange={(event) => setAddressNumber(Number(event.target.value))}
                        inputProps={{
                            pattern: '[0-9]*',
                            inputMode: 'numeric'
                        }}
                        startAdornment={
                            <InputAdornment position="start" />
                        }
                    />

                    <button>{isAdd ? "Cadastrar" : "Editar"}</button>
                </form>
            </ContentContainer>
        </Container>
    )
}
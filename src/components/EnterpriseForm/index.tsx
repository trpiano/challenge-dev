import { FormEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";

import { Input, InputAdornment, Select, MenuItem, SelectChangeEvent } from "@material-ui/core";

import { Container, ContentContainer } from "./styles";

interface EnterpriseFormProps {
    isAdd?: boolean;
  }

interface CEPData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}
export default function EnterpriseForm({ isAdd = false }) {
    const initialCEPData: CEPData = {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: '',
      };


    const [launch, setLaunch] = useState<string>('');
    const [residential, setResidential] = useState<string>('');
    const [cepFetchResult, setCepFetchResult] = useState<CEPData>(initialCEPData);

    const handleLaunchChange = (event: SelectChangeEvent<string>) => {
        setLaunch(event.target.value);
    };

    const handleResidentialChange = (event: SelectChangeEvent<string>) => {
        setResidential(event.target.value);
    };

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

    function handleSubmit(event: FormEventHandler<HTMLFormElement>) {
        event.preventDefault()
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
                        placeholder="Nome do empreendimento"
                        startAdornment={
                            <InputAdornment position="start" />
                        }
                    />
                    <Select
                        fullWidth
                        id="residential"
                        value={residential}
                        onChange={(event) => handleResidentialChange(event)}
                    >
                        <MenuItem disabled value="">
                            <em>Residencial</em>
                        </MenuItem>
                        <MenuItem value="residential">Residencial</MenuItem>
                        <MenuItem value="commercial">Comercial</MenuItem>
                    </Select>
                    <Input
                        fullWidth
                        id="zipCode"
                        placeholder="CEP"
                        inputProps={{ maxLength: 8 }}
                        onChange={(event) => event.target.value.length < 8 ? setCepFetchResult(Object.assign({}, initialCEPData)) : fetchCEPData(event.target.value)}
                        startAdornment={
                            <InputAdornment position="start" />
                        }
                    />

                    {cepFetchResult ?
                        <>
                            <p>{cepFetchResult.logradouro}</p>
                            <p>{cepFetchResult.bairro}</p>
                            <p>{cepFetchResult.localidade}</p>
                            <p>{cepFetchResult.uf}</p>
                        </>
                        :
                        <>
                            <p aria-hidden="true" />
                            <p aria-hidden="true" />
                            <p aria-hidden="true" />
                            <p aria-hidden="true" />
                        </>
                    }

                    <Input
                        fullWidth
                        id="number"
                        placeholder="Número"
                        onChange={(event) => event.target.value.length}
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
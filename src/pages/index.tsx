import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { IconButton, Input, InputAdornment, Alert, Button } from "@material-ui/core";

import ButtonFooter from "../components/ButtonFooter";
import Header from "../components/Header";
import EnterpriseForm from "../components/EnterpriseForm";

import { dataProps, initialData } from "../constants/enterprise";

import {
    BoxNameEnterprise,
    ContainerHome,
    ContentHome,
    ContentStatus,
    ContainerLupa,
    ContentLupa,
    Flags,
    FlagsContainer,
    IconsContainer,
    AlertContainer,
    AlertContentContainer,
} from "./styles";
import { useAppContext } from "../context/AppContext";

export default function Home() {
    const [enterprises, setEnterprises] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState(0)
    const [search, setSearch] = useState("")

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState<String>()

    const [dataToEdit, setDataToEdit] = useState<dataProps>(initialData)

    const {
        isHome,
        isAddingEnterprises,
        isEditingEnterprises,
        setIsHome,
        setIsAddingEnterprises,
        setIsEditingEnterprises,
    } = useAppContext();

    const Enterprises = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_ENTERPRISES_API}/enterprises`).then((response) => {
            setEnterprises(response.data)
        });
    }

    useEffect(() => {
        numberEnterprises()
    })

    useEffect(() => {
        Enterprises()
    }, [isAddingEnterprises, isEditingEnterprises])

    function numberEnterprises() {
        setEnterprisesNumber(enterprises.length)
    }

    function handleHereNewEnterprise() {
        setIsAddingEnterprises(true)
        setIsHome(false);
    }

    function openEditScreen(data: dataProps) {
        setDataToEdit(data)
        setIsEditingEnterprises(true)
        setIsHome(false);
    }

    function handleHome() {
        setIsAddingEnterprises(false);
        setIsEditingEnterprises(false);
        setIsHome(true);
    }

    function openModalToDelete(id: string) {
        setIdToDelete(id)
        setOpenModalDelete(true)
    }

    async function DeleteEnterprise(id: string) {
        await axios.delete(`${process.env.NEXT_PUBLIC_ENTERPRISES_API}/enterprises/${id}`)
            .then(() => {
                setOpenModalDelete(false)
                Enterprises()
            }).catch((err) => {
                window.alert(`Erro ao Deletar, ${err}`)
            })
    }


    const handleSearch = enterprises.filter((body: any) => {
        return body.name
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
    })

    return (
        <>
            <Head>
                <title>ChallengeJob</title>
            </Head>

            <main>
                {isHome &&
                    <>
                        <Header
                            title="Empreendimentos"
                            button={true}
                            IconReturn={false}
                            PushButton={handleHereNewEnterprise}
                            PushButtonReturn={handleHome}
                            returnProps={false}
                        />
                        <ContainerLupa>
                            <ContentLupa>
                                <div>
                                    <Input
                                        fullWidth
                                        id="standard-adornment-password"
                                        onChange={(e) => {
                                            setSearch(e.target.value)
                                        }}
                                        startAdornment={
                                            <InputAdornment onClick={() => handleSearch} position="start">
                                                <IconButton type="submit" aria-label="search">
                                                    <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                                                    Buscar
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                            </ContentLupa>
                        </ContainerLupa>
                        {handleSearch.slice(0, rowsPerPage).map((data: any) => {
                            return (
                                <ContainerHome key={data.id}>
                                    <ContentHome>
                                        {(openModalDelete && idToDelete === data.id) &&
                                            <AlertContainer>
                                                <Alert
                                                    style={{
                                                        maxWidth: 'md'
                                                    }}
                                                    severity="error"
                                                    action={
                                                        <AlertContentContainer>
                                                            <Button onClick={() => setOpenModalDelete(false)} color="inherit" size="small">
                                                                Cancelar
                                                            </Button>
                                                            <Button onClick={() => DeleteEnterprise(data.id)} color="inherit" size="small">
                                                                Confirmar
                                                            </Button>
                                                        </AlertContentContainer>
                                                    }
                                                >
                                                    Confirma a exclusão do Empreendimento?
                                                </Alert>
                                            </AlertContainer>
                                        }
                                        
                                        {(!openModalDelete || (openModalDelete && idToDelete !== data.id)) &&
                                            <div>
                                                <BoxNameEnterprise>
                                                    <span>{data.name}</span>
                                                </BoxNameEnterprise>
                                                <p>{data.address.street}, {data.address.number} - {data.address.district}, {data.address.state}</p>
                                            </div>
                                        }

                                        <ContentStatus>
                                            <FlagsContainer>
                                                <Flags>{data.status === "RELEASE" ? "Lançamento" : data.status}</Flags>
                                                <Flags>{data.purpose === "HOME" ? "Residencial" : data.purpose}</Flags>
                                            </FlagsContainer>
                                            <IconsContainer>
                                                <img
                                                    onClick={() => {
                                                        openEditScreen(data)
                                                    }}
                                                    src="/images/Vector.svg"
                                                    alt="Icone de Lapis"
                                                />
                                                <img
                                                    onClick={() => {
                                                        openModalToDelete(data.id);
                                                    }}
                                                    src="/images/Vector-1.svg"
                                                    alt="Icone de Lixeira"
                                                />
                                            </IconsContainer>
                                        </ContentStatus>
                                    </ContentHome>
                                </ContainerHome>
                            )
                        })}
                        {(enterprisesNumber >= rowsPerPage) && <ButtonFooter description={"Carregar mais"} pushClick={() => setRowsPerPage(rowsPerPage + 5)} />}
                    </>
                }
                {isAddingEnterprises &&
                    <>
                        <Header
                            title="Cadastro de empreendimento"
                            button={false}
                            IconReturn={true}
                            PushButton={handleHereNewEnterprise}
                            PushButtonReturn={handleHome}
                            returnProps={true}
                        />
                        <EnterpriseForm isAdd />
                    </>
                }
                {isEditingEnterprises &&
                    <>
                        <Header
                            title="Editar empreendimento"
                            button={false}
                            IconReturn={true}
                            PushButton={handleHereNewEnterprise}
                            PushButtonReturn={handleHome}
                            returnProps={true}
                        />

                        <EnterpriseForm isAdd={false} oldData={dataToEdit} />
                    </>
                }
            </main>
        </>
    )
}
export interface dataProps {
    id: string;
    launch: string;
    name: string;
    purpose: string;
    ri_number: number;
    status: string;
    address: {
        cep: string;
        city: string;
        district: string;
        number: number | undefined;
        state: string;
        street: string;
    };
}

export interface CEPData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
}

export const initialData: dataProps = {
    id: '',
    launch: '',
    name: '',
    purpose: '',
    ri_number: 0,
    status: '',
    address: {
      cep: '',
      city: '',
      district: '',
      number: undefined,
      state: '',
      street: '',
    }
};

export const initialCEPData: CEPData = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
};

export const selectStyles = {
    boxShadow: "none",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    borderBottom: 1,
    borderColor: "grey.500",
    borderRadius: 0,
  };
  

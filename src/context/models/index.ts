export interface AppContextType {
    isHome: boolean;
    isAddingEnterprises: boolean;
    isEditingEnterprises: boolean;
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAddingEnterprises: React.Dispatch<React.SetStateAction<boolean>>;
    setIsEditingEnterprises: React.Dispatch<React.SetStateAction<boolean>>;
}
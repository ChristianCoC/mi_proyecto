import ICredentials from "./ICredentials";

interface IUsers {
    id: number;
    name: string;
    email: string;
    birthDate: string;
    nDni: number;
    credentialsId: ICredentials;
}

export default IUsers;
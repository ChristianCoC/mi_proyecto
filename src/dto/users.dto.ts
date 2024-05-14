import ICredentials from "../interfaces/ICredentials";

interface UserDto {
    name: string;
    email: string;
    birthDate: string;
    nDni: number;
    credentialsId: ICredentials;
}

export default UserDto;
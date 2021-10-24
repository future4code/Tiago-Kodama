import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUserInfoUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}

    async execute (id: string){
        return await this.userRepository.findById(id)  
    }
}
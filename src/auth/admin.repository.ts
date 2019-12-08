import { Admin } from "./admin.entity";
import { Repository, EntityRepository } from "typeorm";
import { AuthCreditsDto } from "./dto/auth-credits.dto";
import * as bcrypt from 'bcrypt'

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  
  async validateUserPassword(authCreditsDto: AuthCreditsDto) : Promise<string | null> {
    const {username, password} = authCreditsDto;
    const user = await this.findOne({username});

    if(user && await user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
    }
  }
}

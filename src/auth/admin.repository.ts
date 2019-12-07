import { Admin } from "./admin.entity";
import { Repository, EntityRepository } from "typeorm";
import { AuthCreditsDto } from "./dto/auth-credits.dto";
import * as bcrypt from 'bcrypt'

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  // async signUp(authCreditsDto: AuthCreditsDto): Promise<void> {
  //   const { username, password } = authCreditsDto;

  //   const user = this.create();
  //   user.username = username;
  //   user.salt = await bcrypt.genSalt();
  //   user.password = await this.hashPassword(password, user.salt);

  //   await user.save();
  // }

  // private hashPassword(password: string, salt: string) : Promise<string> {
  //   return bcrypt.hash(password, salt);
  // }

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

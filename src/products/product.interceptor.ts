import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/category.entity';
import { tap } from "rxjs/operators"

@Injectable()
export class CategoryInterceptor implements NestInterceptor {

  constructor(
    private readonly categoryService: CategoriesService
  ) { }

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {

    const category = await this.categoryService.getCategoryById(context.switchToHttp().getRequest().body['category'] as number);
    context.switchToHttp().getRequest().body['categoryObj'] = category;

    return next.handle();
  }
}

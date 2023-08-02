import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @MessagePattern('createBlog')
  create(@Payload() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @MessagePattern('findAllBlogs')
  async findAll() {
    return await this.blogsService.findAll();
  }

  @MessagePattern('findOneBlog')
  findOne(@Payload() id: number) {
    return this.blogsService.findOne(id);
  }

  @MessagePattern('updateBlog')
  update(@Payload() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(updateBlogDto.id, updateBlogDto);
  }

  @MessagePattern('removeBlog')
  remove(@Payload() id: number) {
    return this.blogsService.remove(id);
  }
}

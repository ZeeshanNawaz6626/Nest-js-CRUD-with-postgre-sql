import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository:Repository<Book> ){}
  create(createBookDto: CreateBookDto): Promise<Book> {
    let book :Book=new Book();
    book.bookName=createBookDto.bookName;
    book.authorName=createBookDto.authorName;
   
        return this.bookRepository.save(book);
  }

  findAll(): Promise<Book[]>  {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let book :Book=new Book();
    book.bookName=updateBookDto.bookName;
    book.authorName=updateBookDto.authorName;
    book.id=id;
        return this.bookRepository.save(book);
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly apiUrl = 'http://localhost:3000/api/products';

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Produto[]> {
    // TODO: implementar GET /api/products
    return this.http.get<Produto[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao listar produtos:', error);
        return throwError(() => new Error('Erro ao listar produtos'));
      })
    );
  }

  buscarPorId(id: number): Observable<Produto> {
    // TODO: implementar GET /api/products/:id
    return this.http.get<Produto>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao buscar produto:', error);
        return throwError(() => new Error('Erro ao buscar produto'));
      })
    );
  }

  cadastrar(produto: Produto): Observable<Produto> {
    // TODO: implementar POST /api/products
    return this.http.post<Produto>(this.apiUrl, produto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao cadastrar produto:', error);
        return throwError(() => new Error('Erro ao cadastrar produto'));
      })
    );
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    // TODO: implementar PUT /api/products/:id
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao atualizar produto:', error);
        return throwError(() => new Error('Erro ao atualizar produto'));
      })
    );
  }

  excluir(id: number): Observable<void> {
    // TODO: implementar DELETE /api/products/:id
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao excluir produto:', error);
        return throwError(() => new Error('Erro ao excluir produto'));
      })
    );
  }
}

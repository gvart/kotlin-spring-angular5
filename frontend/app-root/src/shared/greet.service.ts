import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Greet} from "../models/greet.model";

@Injectable()
export class GreetService {
    constructor(
        private http: HttpClient
    ){}

    public greet(): Observable<Greet> {
        return this.http.get<Greet>("/api");
    }
}
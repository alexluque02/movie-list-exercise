import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountResponse } from "../model/account.interface";
import { Observable } from "rxjs";
import { environment } from "../environments/environments";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    getAccountDetails(): Observable<AccountResponse> {
        return this.http.get<AccountResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem("SESSION_ID")}&${environment.apiKey}`)
    }

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountResponse } from "../model/account.interface";
import { Observable } from "rxjs";
import { environment } from "../environments/environments";
import { List, ListsResponse } from "../model/personal-list.interface";
import { CreateListResponse } from "../model/create-list.interface";
import { ListResponse } from "../model/list.interface";
import { StatusResponse } from "../model/status-list.interface";
import { ClearStatusResponse } from "../model/clear-status.inteface";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    getAccountDetails(): Observable<AccountResponse> {
        return this.http.get<AccountResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem("SESSION_ID")}&${environment.apiKey}`)
    }

    getPersonalLists(): Observable<ListsResponse> {
        return this.http.get<ListsResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/lists?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`)
    }

    createList(name: any, description: any): Observable<CreateListResponse> {
        return this.http.post<CreateListResponse>(`${environment.apiBaseUrl}/list?session_id=${localStorage.getItem("SESSION_ID")}&${environment.apiKey}`,
            {
                "name": name,
                "description": description,
                "language": "es"
            }
        )
    }

    getListDetails(listId: any): Observable<ListResponse> {
        return this.http.get<ListResponse>(`${environment.apiBaseUrl}/list/${listId}?${environment.apiKey}`)
    }

    deleteList(listId: any): Observable<StatusResponse> {
        return this.http.delete<StatusResponse>(`${environment.apiBaseUrl}/list/${listId}?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`)
    }

    clearList(listId: any): Observable<ClearStatusResponse> {
        return this.http.post<ClearStatusResponse>(`${environment.apiBaseUrl}/list/${listId}/clear?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}&confirm=true`,
            {

            })
    }
}
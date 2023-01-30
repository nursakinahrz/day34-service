import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./components/models";

@Injectable()
export class FriendsService {

    friends = new Subject<User>()
}
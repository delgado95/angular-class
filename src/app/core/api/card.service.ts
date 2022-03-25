import { Injectable } from "@angular/core";
import { ICardList } from "../data/card.data";

@Injectable()
export class cardListService{
    public cardList: ICardList[] = [
        {
            name: "joao",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "jose",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "maria",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "ana",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "joana",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "mario",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "bruno",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "yoda",
            number: "19 99999-9999",
            isInternational: false
        },
        {
            name: "mcqueen",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "will",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "roberta",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "roberto",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "fernanda",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "fernando",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "messi",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "cr7",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "neymar",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "marta",
            number: "19 99999-9999",
            isInternational: true 
        },
    ]

    constructor() {}

    get getCardList(): ICardList[] {
        return this.cardList;
    }
}
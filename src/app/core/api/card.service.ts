import { Injectable } from "@angular/core";
import { ICardList } from "../data/card.data";

@Injectable()
export class cardListService{
    public cardList: ICardList[] = [
        {
            name: "João",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "José",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Maria",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Ana",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Joana",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Mario",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Bruno",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Yoda",
            number: "19 99999-9999",
            isInternational: false
        },
        {
            name: "McQueen",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Will",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Roberta",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "R2-D2",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Thanos",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Fernando",
            number: "19 99999-9999",
            isInternational: true 
        },
        {
            name: "Messi",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Cr7",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Neymar",
            number: "19 99999-9999",
            isInternational: false 
        },
        {
            name: "Marta",
            number: "19 99999-9999",
            isInternational: true 
        },
    ]

    constructor() {}

    get getCardList(): ICardList[] {
        return this.cardList;
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpace'
})


export class ConvertToSpace implements PipeTransform{
    transform(value: string, caracter:string) {
         return value.replace(caracter,' ');
    }
   

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "zigzag"
})

export class ZigZagPipe implements PipeTransform {

    transform(value : string , args: string[])
    {
        var output: string = value;
        if (value)
        {
            output = '';
            for (var i = 0; i <= value.length; i++)
            {
                var temp = value.charAt(i);
                if (i % 2 == 0)
                    temp = temp.toUpperCase();
                output += temp;
            }
        }
        return output;
    }
}
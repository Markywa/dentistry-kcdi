import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { EmployeesResponse, SpecialistsResponse } from "../../interfaces/employees.interface";

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DropdownComponent),
          multi: true
        }
      ],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class DropdownComponent implements ControlValueAccessor {
    public value!: string;
    @Input() list: SpecialistsResponse[] = [];
    selectedItem: string | null = null;
    isOpen: boolean = false;
  
    toggleDropdown() {
      console.log(this.selectedItem);
      this.isOpen = !this.isOpen;
    }
  
    selectItem(item: SpecialistsResponse): void {
      this.selectedItem = item.name;
      this.onChange(item.id);
      this.isOpen = false;
    }
    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(value: any): void {
      if(!isNaN(value)){
        this.selectedItem = this.list.find((item) => item.id === value)?.name as string; 
      } else {
        this.selectedItem = value;
      }
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'asw-divider',
    templateUrl: './divider.component.html'
})
export class DividerComponent {

    constants: any = Constants;
    /**
     * Divider control
     */
    @Input() control: any;

    /**
     * Divider control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
	@Input() isPreviewTemplate = true;

    @Output() dividerDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete divider control based on control index
     * @param control divider control items
     * @param controlIndex divider control index
     */
	deleteHeaderDialog(control: any, controlIndex: number): void {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.controlType, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result !== undefined) {
                this.dividerDeleteEvent.emit(controlIndex);
			}
		});
	}
}

import {
    Button,
    Dialog
} from 'mdc-react';

export default function FormDialog({ title, open, form, children, onClose }) {
    return (
        <Dialog
            className="exercise-form-dialog"
            title={title}
            open={open}
            onClose={onClose}
        >
            <Dialog.Content>
                {children}
            </Dialog.Content>

            <Dialog.Actions>
                <Button
                    type="button"
                    label="Отменить"
                    onClick={onClose}
                />

                <Button
                    type="submit"
                    label="Создать"
                    form={form}
                    outlined
                />
            </Dialog.Actions>
        </Dialog>
    );
}
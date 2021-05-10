import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            "mouseenter:h1": this.onHeaderHover,
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
            "click:.save-model": this.onSaveClick,
        };
    }
    onButtonClick(): void {
        console.log("Hi there!");
    }
    onHeaderHover(): void {
        console.log("I'm hover");
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    onSetNameClick = (): void => {
        const input = this.parent.querySelector("input");
        this.model.set({ name: input.value });
    };

    onSaveClick = (): void => {
        this.model.save();
    };

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get("name")}</div>
                <div>User age: ${this.model.get("age")}</div>
                <input placeholder="${this.model.get("name")}"/>
                <button class="set-name">Change name</button>
                <button class="set-age">Set random age</button>
                <button class="save-model">Save model</button>
            </div>
        `;
    }
}

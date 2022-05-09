import * as React from "react";
import * as Components from "./components";
import config from "./config";
import DataProvider from "./DataProvider";

import "./assets/styles/style.css"

export default class App extends React.Component {

    componentDidMount()
    {
        const toggle = document.querySelector('.hover-show');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });

        const Icons = document.querySelectorAll('.navigation .navicon');

        Icons.forEach((icon) => {
            icon.addEventListener('click', () => {
                changeactive();

                icon.classList.add('active-nav');
            });
        });

        function changeactive() {
            Icons.forEach((icon) => {
                icon.classList.remove('active-nav');
            });
        }
    }

    render()
    {
        return (
            <DataProvider>
                <Components.header/>
                <Components.navbar/>
                <Components.home/>
                {config.enabledComponents.includes('about') ? <Components.about/> : ''}
                {config.enabledComponents.includes('members') ? <Components.members/> : ''}
                {config.enabledComponents.includes('contact') ? <Components.contact/> : ''}
                <Components.footer/>
            </DataProvider>
        )
    }
}
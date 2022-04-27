import React from "react";
import {
    Link
  } from "react-router-dom";


export default function Navigation() {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Food Plan</Link>
                        </li>
                        <li>
                            <Link to='shopping-list'>Shopping List</Link>
                        </li>
                    </ul>
                </nav>

                
            </div>
    )
}
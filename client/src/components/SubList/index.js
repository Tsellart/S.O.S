import React from "react";
import { Table } from 'react-materialize';

export function SubList({ children }) {
    return <Table className = 'striped centered'>{children}</Table>;
}

export function SubListItem({
    service,
    price,
    rate
}) {
    return (
        <tr>
            <td>
                {service.length}
            </td>
            <td>
                {price.length}
            </td>
            <td>
                {rate.length}
            </td>
        </tr>
        
    )
}
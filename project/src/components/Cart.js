export default function Cart({cartset,totalPrice}) {
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                
                {
                    cartset.map(item=>
                        <tbody>
                         <td>{item.name}</td>
                         <td>{item.quantity}</td>
                         <td>{item.price}</td>
                        </tbody>
                    )
                    
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{totalPrice}</td>
                </tr>
            </table>
           
        </div>
    );
}
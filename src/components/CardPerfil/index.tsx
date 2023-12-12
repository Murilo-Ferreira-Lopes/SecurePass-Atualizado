
export default function CardPerfil(props: any) {

    // function parseListaUsers(){
    //     if(typeof props.users === "string"){
    //         return JSON.parse(props.users)
    //     }else{
    //         return props.users
    //     }
    // }
    return (
        <div>
            <div className="users">
                <tr>
                    <th>{props.matricula}</th>
                    <th>{props.nome}</th>
                    <th>{props.setor}</th>
                    <th>{props.nascimento}</th>
                    <th>{props.funcao}</th>
                    <th>{props.sessao}</th>
                </tr>
            </div>
          
    </div>
    )
}
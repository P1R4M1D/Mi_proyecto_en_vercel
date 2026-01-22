function HeaderComponent(props) {
    const {header} = props;

    return( 
    <header className="cls1">
            <h1> Bienvenidos</h1>
                <ul>
                    <li>
                        <a href="#">{header.home}</a>
                    </li>
                    <li>
                        <a href="#">{header.fotos}</a>
                    </li>
                    <li>
                        <a href="#">{header.about}</a>
                    </li>
                    <li>
                        <a href="#">{header.contact}</a>
                    </li>
                </ul>
        </header>
    )
}

export default HeaderComponent;

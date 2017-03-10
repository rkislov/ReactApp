class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.phone };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.onRemove(this.state.data);
    }
    render() {
        return <div>
            <p><b>{this.state.data.name}</b></p>
            <p>Цена {this.state.data.price}</p>
            <p><button onClick={this.onClick}>Удалить</button></p>
        </div>;
    }
}
        class PhoneForm extends React.Component {

    constructor(props){
            this.state = { name: "", price: 0 };

            this.onSubmit = this.onSubmit.bind(this);
            this.onNameChange = this.onNameChange.bind(this);
            this.onPriceChange = this.onPriceChange.bind(this);
        }
            onNameChange(e){
    this.setState({ name: e.target.value });
            }
            onPriceChange(e){
                this.setState({ price: e.target.value });
            }
            onSubmit(e){
    e.preventDefault();
    var phoneName = this.state.name.trim();
    var phonePrice = this.state.price;
    if (!phoneName || phonePrice < 0) {
        return;
    }
    this.props.onPhoneSubmit({ name: phoneName, price: phonePrice });
    this.setState({ name: "", price: 0 });
            }
            render() {
            return (
                <form onSubmit={this.onSubmit}>
                    <p>
                        <input type="text"
                            placeholder="Модель телефона"
                            value={this.state.name}
                            onChange={this.onNameChange} />
                    </p>
                    <p>
                        <input type="text"
                            placeholder="Цена"
                            value={this.state.price}
                            onChange={this.onPriceChange} />
                    </p>
                    <input type="submit" value="Сохранить"/>
                </form>
                );
            }
}

        class PhoneList extends React.Component {
            constructor(props) {
                super(props);
                this.state = { phones: [] };

                this.onAddPhone = this.onAddPhone.bind(this);
                this.onRemovePhone = this.onRemovePhone.bind(this);

            }

            //загрузка данных
            loadData() {
                var xhr = new XMLHttpRequest();
                xhr.open("get", this.props.apiUrl, true);
                xhr.onload = function () {
                    var data = JSON.parse(xhr.responseText);
                    this.setState({ phone: data });
                }.bind(this);;
                xhr.send();
            }
            componentDidMount() {
                this.loadData();
            }
        }

import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Header, Button, Separator, FormLayout, Input, PanelHeaderBack } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class Activ extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  activePanel: 'main'
  }
 }


render() {
  return (
    <View activePanel={this.state.activePanel}>
      <Panel id="main">

       <PanelHeader>
       <h5 style={{textAlign: "center", color: "#5c5c5c"}}>Изучение Автомобилей</h5>
       </PanelHeader>

        <Header mode="secondary">Калькуляторы</Header>
        <div style={{position: "absolute", left: "20px"}}>
        <Button mode="outline" onClick={ () => this.setState({ activePanel: "fuelConsumption" }) }>Расход Топлива</Button>
        <div style={{position: "absolute", top: "40px"}}><Button mode="outline">Цена Топлива За Километр</Button></div>
        </div>

        <Separator style={{position: "relative", top: "110px"}} />

        <div style={{position: "relative", top: "115px"}}><Header mode="secondary">Информация</Header></div>
        <div style={{position: "absolute", left: "20px"}}>
        <div style={{position: "absolute", top: "115px"}}><Button mode="outline">Марки Автомобилей</Button></div>
        <div style={{position: "absolute", top: "170px"}}><Button mode="outline">Устройство Автомобиля</Button></div>
        <div style={{position: "absolute", top: "225px"}}><Button mode="outline">Дорожные Знаки</Button></div>
        <div style={{position: "absolute", top: "280px"}}><Button mode="outline">Управление Автомобилем</Button></div>
        </div>

        <Separator style={{position: "relative", top: "360px"}} />

        <div style={{position: "absolute", top: "515px", left: "20px"}}><Button mode="outline">Про Приложение</Button></div>
      </Panel>

      <Panel id="fuelConsumption">
        <PanelHeader
        left={<PanelHeaderBack onClick={ () => this.setState({ activePanel: "main" }) } />}
        >
        <h5 style={{textAlign: "center", color: "#5c5c5c"}}>Расход Топлива</h5>
        </PanelHeader>
        <div style={{position: "absolute", left: "20px"}}>
       <p style={{width: "190px", fontWeight: "bold"}}>Кол-во заправленного топлива в литрах:</p>
       <FormLayout style={{position: "relative", bottom: "15px"}}>
       <Input
        type="number"
        name="refuel"
       />
       </FormLayout>
       <p style={{width: "190px", fontWeight: "bold"}}>Расстояние, которое вы проехали в километрах:</p>
       <FormLayout style={{position: "relative", bottom: "15px"}}>
       <Input
        type="number"
        name="range"
       />
       </FormLayout>
        </div>
      <Separator style={{position: "relative", top: "300px"}} />
      <div style={{position: "absolute", left: "20px"}}>
      <p style={{width: "190px", fontWeight: "bold", position: "absolute", top: "315px"}}>Результат:</p>
      <FormLayout style={{position: "relative", top: "350px"}}>
       <Input
        type="number"
        name="result"
       />
       </FormLayout>
      </div>
      <Separator style={{position: "relative", top: "440px"}} />
      <Button mode="outline" size="x1" style={{position: "absolute", top: "510px", left: "30px"}}>Как Посчитать?</Button>
      </Panel>
    </View>
  );
 }
}


ReactDOM.render(<Activ />, document.getElementById('root'));
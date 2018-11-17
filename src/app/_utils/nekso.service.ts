import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Injectable()
export class NeksoService {

  public show: boolean = false;
  public drivers: any;
  public passengers: any;

  constructor(private router: Router) {

this.drivers = [
	{ firstName: 'Mauricio', lastName: 'Muñoz', username: 'Mau123', email: 'mauriciomunoz@gmail.com', address: '1873 Clay Street', city: 'Indianapolis', state: 'Indiana', zip: '46254', phone: '317-385-2513', gender: 'Hombre', image: 'assets/drivers/0.jpg', brand: 'Volkswagen', model: 'Vento', plate: 'ASD1345' },
	{ firstName: 'Oswaldo', lastName: 'Gutierrez', username: 'Oso456', email: 'oswaldogutierrez@gmail.com', address: '1842 Saint Clair Street', city: 'Greenwood', state: 'Mississippi', zip: '38930', phone:'662-626-2620', gender: 'Hombre', image: 'assets/drivers/1.jpg', brand: 'Nissan', model: 'Versa', plate: 'ZXC7189' },
	{ firstName: 'Victor', lastName: 'Ballinas', username: 'Vic987', email: 'victorballinas@gmail.com', address: '4177 Friendship Lane', city: 'San Martin', state: 'California', zip: '95046', phone: '408-681-8740', gender: 'Hombre', image: 'assets/drivers/2.jpg', brand: 'Honda', model: 'Fit', plate: 'FGH3211' },
	{ firstName: 'Jorge', lastName: 'Vazquez', username: 'Yorch213', email: 'jorgevazquez@gmail.com', address: '3208 Kelly Street', city: 'Charlotte', state: 'North Carolina', zip: '28263', phone: '704-975-1325', gender: 'Hombre', image: 'assets/drivers/3.jpg', brand: 'Dodge', model: 'Attitude', plate: 'BNM9187' },
	{ firstName: 'Efrain', lastName: 'Ramos', username: 'Efra654', email: 'efrainramos@gmail.com', address: '2499 Jadewood Drive', city: 'Chicago', state: 'Illinois', zip: '60606', phone: '224-484-7871', gender: 'Hombre', image: 'assets/drivers/4.jpg', brand: 'Honda', model: 'City', plate: 'POI7418' },
	{ firstName: 'Saul', lastName: 'Morales', username: 'Moss963', email: 'saulmorales@gmail.com', address: '3554 Oak Drive', city: 'Albany', state: 'New York', zip: '12206', phone: '518-591-3328', gender: 'Hombre', image: 'assets/drivers/5.jpg', brand: 'Chevrolet', model: 'Sonic', plate: 'LKJ6547' }
]

this.passengers = [
	{ firstName: 'Carlos', lastName: 'Camacho', username: 'Charlie987', email: 'carloscamacho@gmail.com', address: '4442 Boring Lane', city: 'San Francisco', state: 'California', zip: '94110', phone: '415-642-2589', gender: 'Hombre', image: 'assets/passengers/0.jpg' },
	{ firstName: 'Moisés', lastName: 'Nervis', username: 'Moi546', email: 'moisesnervis@gmail.com', address: '4386 Oak Avenue', city: 'Hickory Hills', state: 'Illinois', zip: '60457', phone: '847-927-5124', gender: 'Hombre', image: 'assets/passengers/1.jpg' },
	{ firstName: 'Karen', lastName: 'Seguel', username: 'Karen234', email: 'karenseguel@gmail.com', address: '4947 Boggess Street', city: 'Bellefontaine', state: 'Ohio', zip: '43310', phone: '937-935-1293', gender: 'Mujer', image: 'assets/passengers/2.jpg' },
	{ firstName: 'Nestor', lastName: 'Alarcon', username: 'Nestor852', email: 'nestoralarcon@gmail.com', address: '4987 Pin Oak Drive', city: 'Davenport', state: 'Iowa', zip: '52803', phone: '563-327-0193', gender: 'Hombre', image: 'assets/passengers/3.jpg' },
	{ firstName: 'Armando', lastName: 'Rosas', username: 'Armand741', email: 'armandorosas@gmail.com', address: '3050 Apple Lane', city: 'Bloomington', state: 'Illinois', zip: '61701', phone: '309-319-4775', gender: 'Hombre', image: 'assets/passengers/4.jpg' },
	{ firstName: 'Stefani', lastName: 'Huerta', username: 'Stef147', email: 'stefanihuerta@gmail.com', address: '2137 Atha Drive', city: 'Bakersfield', state: 'California', zip: '93307', phone: '661-667-2789', gender: 'Mujer', image: 'assets/passengers/5.jpg' }
]
  }

}

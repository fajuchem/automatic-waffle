import { bootstrap } from './start';

export function otherMain() {
  console.log('other main');
  bootstrap();
  console.log('other main');
}

export function otherMainUsingBootstrap() {
  console.log('other main');
  bootstrap();
  console.log('other main');
}

export function thisShouldNotAppear() {
  console.log('this should not appear');
}

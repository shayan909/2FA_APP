import { makeAutoObservable } from "mobx";

class CodeStore {
  codes = [];
  nextId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addCode(name) {
    const number = Math.floor(100000 + Math.random() * 900000);
    this.codes.push({ id: this.nextId++, name, number, expires: Date.now() + 60000 });
  }

  regenerateCode(id) {
    const code = this.codes.find(code => code.id === id);
    if (!code) return;

    const number = Math.floor(100000 + Math.random() * 900000);
    code.number = number;
    code.expires = Date.now() + 60000;
  }
  
}

const codeStore = new CodeStore();
export default codeStore;

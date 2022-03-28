class  AttackSkill {
   constructor (name, damage ,magic) {
this.name = name
this.damage = damage
this.magic = magic

   }
}

class Pokemon{
   alive = true
   constructor(name, health, magic,skills = []){
      this.name = name
      this.health = health
      this.magic = magic
      this.skills = skills
   }
   learnAttackSkill(wert){
     return this.skills.push(wert)
   }
   showStatus (){
console.log(`Magic = ${this.magic} left, and Health = ${this.health}`);
   }
   attack (skill,target){
console.log(skill,target);
      switch (skill.name){
         case 'Burn':
            target.health = target.health - 10 
            target.magic = target.magic -10
            this.health = this.health + 30
            this.magic = this.magic + 30
            console.log(`${this.name} launched skill ${this.skills.name} successfully!`);
            console.log(`${target.name} got 10 damage`);
         break
         case 'DiscoDancer':
            target.health = target.health - 20
            target.magic = target.magic - 20
            this.health = this.health + 10
            this.magic = this.magic + 10
            console.log(`${this.name} launched skill ${this.skills.name} successfully!`);
            console.log(`${target.name} got 20 damage`);
            break
            case 'Crazy':
               target.health = target.health - 30
               target.magic = target.magic - 30
               this.health = this.health * 20
               this.magic = this.magic * 20
               console.log(`${this.name} launched skill ${this.skills.name} successfully!`);
            console.log(`${target.name} got 30 damage`);
             break
             case 'Lightning':
                this.health = this.health + target.health
                this.magic = this.magic + target.magic
                target.health = target.health = 0
                target.magic = target.magic = 0 
                console.log(`${this.name} launched skill ${this.skills.name} successfully!`);
            console.log(`${target.name}  is dead`);
                break
                default :
                console.log('Go sleeping');   
      }
     
   } 
   addSoldier (...params) {
      let soldiers = []
      this.soldier = this.soldier ? this.soldier : soldiers
    return this.soldier.push(...params) 
   }
   
  /*   soldierAttack() {
      const sold = this.soldier.forEach((v,i,a) => {
       return `${i},is ${v} in Team ${a}`
      })
     setInterval(this.soldierAttack,500)
   } */ 

 healthyCheck (symptom){
if (symptom === 'High fever'){
   this.health = this.health - 60
   this.alive = 'Seriously ill'
   this.skills = this.skills.pop()
   console.log(`You have virus Corona`);
}else if (symptom === 'Headache'){
   this.health = this.health - 30
   this.alive = 'sick'
   console.log(`Ỳou ${this.name} need some rest`);
}else if (symptom === 'Wounded'){
   this.health = 0
   this.magic = 0
   this.skills = []
   this.alive = false
   console.log(`Ì am sorry but ${this.name} ist dead`);
}else {
   console.log(`Go dancing`);
}

}
   set magicUpdate(g){
     this.magic = g
     if (this.magic >= 100){
        this.skills.push(love)
     }else if (this.magic === 0){
     this.skills.pop()
     }
  }
  get magicUpdate () {
     return this.magic
  } 
   theWinner (target){
      let winner =  Math.max(this.health,target.health) === this.health ? `${this.name} , ${this.health}`:`${target.name},${target.health}` 
      return winner
   }
   donate (num,target){
      target.magic = target.magic + num
      this.magic = this.magic - num
      return target.magic, this.magic
   }
 
}

class Soldier extends Pokemon {
   constructor (name, health, magic, skills = [],special){
      super (name, health, magic, skills = [])
      this.special = special
   }

}

let minoo = new Pokemon ('Minoo',90,50)
let dimdim = new Pokemon ('Dimdim',100,70)
/* console.log(minoo); */
let burn = new AttackSkill('Burn', 50, 40)
let lightning = new AttackSkill('Lightning',60,70)
let discoDancer = new AttackSkill ('DiscoDancer', 80,30)
let crazy = new AttackSkill ('Crazy',40,10)
let love = new AttackSkill('Love',99,80)
/* console.log(burn); */
minoo.learnAttackSkill(burn)
dimdim.learnAttackSkill(lightning)
minoo.learnAttackSkill(crazy)
dimdim.learnAttackSkill(discoDancer)
//console.log(minoo);
//console.log(dimdim);
 minoo.showStatus();
 minoo.attack(burn,dimdim) 
console.log(minoo.attack(burn,dimdim) );
dimdim.attack(discoDancer,minoo)
minoo.attack(crazy,dimdim)
console.log(minoo);
dimdim.attack(lightning,minoo)
console.log(minoo);
console.log(dimdim);
minoo.magicUpdate = minoo.health
console.log(minoo);
dimdim.magicUpdate = dimdim.magic
console.log(dimdim);
// children
let chimchim = new Soldier ('Chimchim',90,70,[],'Sweet')
let loli = new Soldier ('Loli',95,76,[],'The Best Mother')
let koko = new Soldier('Koko',89,67,[],'Crazy hacker')
let bobi = new Soldier ('Bobi',91,85,[],'Nice Pokemon')
let cici = new Soldier ('Cici',92,90,[],'Cute Pokemon')
minoo.addSoldier(chimchim,loli,koko,bobi,cici)
console.log(minoo.theWinner(dimdim));
console.log(minoo);
console.log(dimdim);
dimdim.donate(30,minoo)
console.log(minoo);
console.log(dimdim);
dimdim.healthyCheck('High fever');
console.log(dimdim);
minoo.healthyCheck('Wounded')
console.log(minoo);


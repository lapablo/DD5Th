// ability-scores ┃ alignments ┃ backgrounds ┃ classes ┃ conditions ┃ damage-types ┃ equipment ┃ equipment-categories ┃ feats ┃ features ┃ languages ┃ magic-items ┃ magic-schools ┃ monsters ┃ proficiencies ┃ races ┃ rule-sections ┃ rules ┃ skills ┃ spells ┃ subclasses ┃ subraces ┃ traits ┃ weapon-properties todos os endpoint

async function info_mon() {
        const opt = document.getElementById('opt')
    
        const inp = document.getElementById('inp')
    
        const url = `https://www.dnd5eapi.co/api/${opt.value}/${inp.value}`
    
        const resp = await fetch(url)
    
        const body = document.getElementById('content-info')
    
        const data = await resp.json()
    
        if (inp.value == ''){
    
            body.innerHTML = ''
    
            data.results.map((resp) => {
                const name = document.createElement('h1')
    
                name.innerText = resp.index
    
                body.appendChild(name)
            })
    
        } else if (inp.value == '' || resp.status != 200) {   
            alert('ops algum erro aconteceu')
        } else {
                body.innerHTML = ''
        
                if (opt.value == 'ability-scores' || opt.value == 'conditions' || opt.value == 'damage-types' || opt.value == 'rule-sections' || opt.value == 'rules' || opt.value == 'skills' || opt.value == 'weapon-properties') {
                    const div = document.createElement('div')
        
                    const name = document.createElement('h1')
                    if (opt.value == 'ability-scores'){
                        name.innerText = data.full_name
                    } else {
        
                        name.innerText = data.index
        
                    }
                    
                    div.append(name)
        
                    if (opt.value == 'ability-scores' || opt.value == 'conditions' || opt.value == 'weapon-properties') {
        
                        data.desc.map((resp) => {
                            const desc = document.createElement('p')
        
                            desc.innerText = resp
        
                            div.append(desc)
        
                        })
                } else {
                    const desc = document.createElement('p')
        
                            desc.innerText = data.desc
        
                            div.append(desc)
                }
        
        
                    if (opt.value == 'ability-scores'){
                        data.skills.map((resp) => { 
                            const skill = document.createElement('p') 
        
                            skill.innerText = resp.name 
        
                            div.append(skill)
                        })
                    }
                    
        
                    if (opt.value == 'rules') {
                        data.subsections.map((resp) => {
                            const name_subs = document.createElement('p')
        
                            name_subs.innerText = `subsection: ${resp.index}`
        
                            div.append(name_subs)
                        })
                    }
        
                    if (opt.value == 'skills') {
                        const abilite = document.createElement('p')
        
                        abilite.innerText = `ability_score: ${data.ability_score.index}`
        
                        div.append(abilite)
                    }
        
                    
        
                    div.classList.add('result')
                    
                    
        
                    body.appendChild(div)
        
            } else if (opt.value == 'alignments') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                const desc = document.createElement('p')
        
                desc.innerText = data.desc
        
                div.append(name)
        
                div.append(desc)
        
                div.classList.add('result')
        
                body.appendChild(div)
        
                
            } else if (opt.value == 'classes') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.name
        
                div.append(name)
        
                data.proficiencies.map((resp) => {
                    const prof = document.createElement('p')
        
                    prof.innerText = `prof : ${resp.index}`
        
                    div.append(prof)
                })
            
                data.subclasses.map((resp) => {
                    const subclass = document.createElement('p')
        
                    subclass.innerText = `subclass: ${resp.index}`
                })
        
                if (data.index != 'monk'){
        
                    data.spellcasting.info.map((resp) => {
                        const spell = document.createElement('h2')
        
                        const desc = document.createElement('p')
        
                        spell.innerText = `spell: ${resp.name}`
        
                        desc.innerText = resp.desc
        
                        div.append(spell)
        
                        div.append(desc)
                    })
                }
        
                div.classList.add('result')
        
                body.appendChild(div)
            } else if (opt.value == 'equipment' || opt.value == 'magic-items') {
        
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                const equit_cate = document.createElement('p')
        
                equit_cate.innerText = `equit_cate: ${data.equipment_category.index}`
        
        
                
                div.append(name)
        
                div.append(equit_cate)
        
                if (data.desc.length > 0 ){
        
                    data.desc.map((resp) => {
                        const desc = document.createElement('p')
        
                        desc.innerText = resp
        
                        div.append(desc)
                    })
                }
        
                const value = document.createElement('p')
        
                if (opt.value == 'equipment') {
                    
                    value.innerText = `valeu: ${data.cost.quantity + data.cost.unit}`
        
                    div.append(value)
                } else if (opt.value == 'magic-items') {
                    const rari = document.createElement('p')
        
                    rari.innerText = `rarity: ${data.rarity.name}`
        
                    div.append(rari)
                    if (data.variants.length > 0 ) {
                        data.variants.map((resp) => {
                            const vari = document.createElement('p')
            
                            vari.innerText = `variant: ${resp.name}`
            
                            div.append(vari)
                        })
                    }
                }
        
        
        
                div.classList.add('result')
        
                body.appendChild(div)        
        
            } else if (opt.value == 'features') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                const _class = document.createElement('p')
        
                _class.innerText = `class: ${data.class.index}`
        
                div.append(_class)
        
                data.desc.map((resp) => {
                    const desc = document.createElement('p')
        
                    desc.innerText = resp
        
                    div.append(desc)
                })
        
                const lev = document.createElement('p')
        
                lev.innerText = `level: ${data.level}`
        
                div.append(lev)
        
                div.classList.add('result')
        
                body.appendChild(div)
        
            } else if (opt.value == 'languages') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                const script = document.createElement('p')
        
                script.innerText = `script: ${data.script}`
        
                div.append(script)
        
                const type = document.createElement('p')
        
                type.innerText = `type: ${data.type}`
        
                div.append(type)
        
                div.classList.add('result')
        
                body.appendChild(div)
            } else if (opt.value == 'monsters') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                data.actions.map((resp) => {
                    const name_act = document.createElement('h2')
        
                    const desc = document.createElement('p')
        
                    name_act.innerText = `action: ${resp.name}`
        
                    desc.innerText = resp.desc
        
                    div.append(name_act)
        
                    div.append(desc)
        
                    
                    if (resp.damage != undefined) {
        
                        resp.damage.map((resp) => {
        
                            const dama_dice = document.createElement('p')
        
                            const dama_type = document.createElement('p')
        
                            dama_dice.innerText = `damage dice: ${resp.damage_dice}`
        
                            dama_type.innerText = `damage type: ${resp.damage_type.name}`
        
                            div.append(dama_type)
        
                            div.append(dama_dice)
        
                            if (resp.attack_bonus != undefined) {
                                const attack_bonus = document.createElement('p')
                
                                attack_bonus.innerText = `attack_bonus: ${resp.attack_bonus}`
        
                                div.append(attack_bonus)
                            } 
                
                        })
                    }
        
                })
        
                const alignment = document.createElement('p')
        
                alignment.innerText = `alignment: ${data.alignment}`
        
        
                const language = document.createElement('p')
        
                language.innerText = `language: ${data.languages}`
        
        
        
                if (data.legendary_actions.length > 0) {
        
                    data.legendary_actions.map((resp) => {
                        const name_act = document.createElement('h2')
        
                        const desc = document.createElement('p')
        
                        name_act.innerText = `legendary_actions: ${resp.name}`
        
                        div.append(name_act)
        
                        desc.innerText = resp.desc
        
                        div.append(desc)
        
                        if (resp.damage != undefined) {
        
                            resp.damage.map((resp) => {
                                const damage_dice = document.createElement('p')
        
                                const damage_type = document.createElement('p')
        
                                damage_type.innerText = `damage_type: ${resp.damage_type.name}`
        
                                damage_dice.innerText = `damage_dice: ${resp.damage_dice}`
        
                                div.append(damage_type)
        
                                div.append(damage_dice)
        
                            })
                        }
        
                    })
                }
        
                data.proficiencies.map((resp) => {
                    const name = document.createElement('h1')
        
                    name.innerText = `proficiencies: ${resp.proficiency.name}`
        
                    console.log(name)
                })
        
                data.special_abilities.map((resp) => {
                    const name = document.createElement('h2')
        
                    const desc = document.createElement('p')
        
                    name.innerText = `special_abilities: ${resp.name}`
        
                    div.append(name)
        
                    desc.innerText = resp.desc
        
                    div.append(desc)
                
                })
        
                const xp = document.createElement('p')
        
                xp.innerText = `xp: ${data.xp}`
        
                div.append(xp)
        
                div.append(alignment)
        
                div.append(language)
        
                div.classList.add('result')
        
                body.appendChild(div)
            } else if (opt.value == 'proficiencies') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                if (data.classes.length > 0) {
        
                    data.classes.map((resp) => {
        
                        const name_cla = document.createElement('p')
        
                        name_cla.innerText = `class: ${resp.index}`    
                        
                        div.append(name_cla)
                    })
                }
        
                if (data.races.length > 0) {
        
                    data.races.map((resp) => {
                        const name_race = document.createElement('p')
        
                        name_race.innerText = `race: ${resp.index}`
        
                        div.append(name_race)
                    })
                }
        
                const type = document.createElement('p')
        
                type.innerText = data.type
        
                div.append(type)
        
                div.classList.add('result')
        
                body.appendChild(div)
            } else if (opt.value == 'races') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                data.ability_bonuses.map((resp) => {
                    const bonus = document.createElement('p')
        
                    bonus.innerText = `bonus: ${resp.ability_score.index} + ${resp.bonus}`
        
                    div.append(bonus)
                })
        
                const language_desc = document.createElement('p')
        
                language_desc.innerText = `langueage_desc:  ${data.language_desc}`
        
                div.append(language_desc)
        
                data.languages.map((resp) => {
                    const name = document.createElement('p')
        
                    name.innerText = `language: ${resp.index}`
        
                    div.append(name)
                })
        
                if (data.starting_proficiencies.length > 0) {
                    data.starting_proficiencies.map((resp) => {
                        const name_prof = document.createElement('p')
        
                        name_prof.innerText = `prof: ${resp.index}`
        
                        div.append(name_prof)
                    })
                }
        
                if (data.subraces.length > 0 ) {
                    data.subraces.map((resp) => {
                        const name_subra = document.createElement("p")
        
                        name_subra.innerText = resp.index
        
                        div.append(name_subra)
                    })
                }
        
                data.traits.map((resp) => {
                    const name_traits = document.createElement('p')
        
                    name_traits.innerText = `trait: ${resp.index}`
        
                    div.append(name_traits)
                })
        
                div.classList.add('result')
        
                body.appendChild(div)
        
        
            } else if (opt.value == 'subclasses') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                const _class = document.createElement('p')
        
                _class.innerText = data.class.index
        
                div.append(_class)
        
                data.desc.map((resp) => {
                    const desc = document.createElement('p')
        
                    desc.innerText = resp
        
                    div.append(desc)
                })
        
                if (data.spells.length > 0 ) {
                    data.spells.map((resp) => {
                        const name_spell = document.createElement('p')
        
        
                        name_spell.innerText = resp.spell.index
        
                        div.append(name_spell)
        
                        resp.prerequisites.map((resp) => {
                            const pres = document.createElement('p')
        
                            pres.innerText = `${resp.type} ${resp.index}`
        
                            console.log(pres)
        
                            div.append(pres)
                        })
                    })  
                }
        
                const subclass_flavor = document.createElement('p')
        
                subclass_flavor.innerText = `subclass_flavor: ${data.subclass_flavor}`
        
                div.append(subclass_flavor)
        
                div.classList.add('result')
        
                body.appendChild(div)
            } else if (opt.value == 'subraces') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
                const desc = document.createElement('p')
        
                desc.innerText = data.desc
        
                div.append(desc)
        
                data.ability_bonuses.map((resp) =>{
                    const bonus = document.createElement('p')
        
                    bonus.innerText = `bonus: ${resp.ability_score.index} + ${resp.bonus}`
        
                    div.append(bonus)
                })
        
                const race = document.createElement('p')
        
                race.innerText = `race: ${data.race.index}`
        
                div.append(race)
        
                div.classList.add('result') 
        
                body.appendChild(div)
        
            } else if (opt.value == 'traits') {
                const div = document.createElement('div')
        
                const name = document.createElement('h1')
        
                name.innerText = data.index
        
                div.append(name)
        
        
                const desc = document.createElement('p')
        
                desc.innerText = data.desc
        
                div.append(desc)
        
                if (data.proficiencies.length > 0 ) {
                    data.proficiencies.map((resp) => {
                        const name_prof = document.createElement('p')
        
                        name_prof.innerText = `prof: ${resp.index}`
        
                        div.append(name_prof)
                    })
                }
        
                if (data.races.length > 0) {
                    data.races.map((resp) => {
                        const name = document.createElement('p')
        
                        name.innerText = `race: ${resp.index}`
        
                        div.append(name)
                    })
                }
        
                if (data.subraces.length > 0)  {
                    data.subraces.map((resp) => {
                        const name = document.createElement('p')
                        
                        name.innerText = `subrace: ${resp.index}`
        
                        div.append(name)
                    })
                } 
        
                div.classList.add('result')
        
                body.appendChild(div)
            }
        
        
        
        }
    }
    info_mon();


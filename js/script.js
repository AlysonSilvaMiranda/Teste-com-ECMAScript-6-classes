"use strict";

class Menu{
	constructor(codigo,link,class_icon,nome){
		this.codigo = codigo;
		this.link = link;
		this.class_icon = class_icon;
		this.nome = nome;
	} 
	lista(menus){
		var lista = document.getElementById("lista");
		for(var i=0; i < menus.length; i++){
			let menu = new Menu(menus[i].codigo,menus[i].link,menus[i].class_icon,menus[i].nome);
			var li_list, link, title, icon;

			//ul_list= document.createElement("ul");
			li_list = document.createElement("li");
			link = document.createElement("a");
			icon = document.createElement("span"); 
		 
			icon.classList.add("icon");
			icon.classList.add(menu.class_icon);
			icon.innerHTML = menu.nome;

			li_list.appendChild(link);
			link.appendChild(icon);
			
			lista.appendChild(li_list);
		}
	}
}

var menus = [
	{
		codigo:1,
		link:"#",
		class_icon:"s1",
		nome:"Acessórios para noivas"		 
	},
	{
		codigo:1,
		link:"#",
		class_icon:"s2",
		nome:"Acessórios para noivas"		 
	},
	 
]

let menu = new Menu();
menu.lista(menus);

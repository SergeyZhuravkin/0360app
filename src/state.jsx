const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivanov@ya.ru",
	id: 1,
	about:
		"Учитывая ключевые сценарии поведения, перспективное планирование напрямую зависит от поставленных обществом задач! Но предприниматели в сети интернет и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.",
	avatar:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=200&q=80",
};

const users = {
	0: { name: "Кристина", lastname: "Иванова", id: 4 },
	1: { name: "Ксения", lastname: "Чижикова", id: 6 },
	2: { name: "Диана", lastname: "Петрова", id: 7 },
	3: { name: "Сергей", lastname: "Петров", id: 16 },
	4: { name: "Александр", lastname: "Солнцев", id: 3 },
  5: { name: "Светлана", lastname: "Петрова", id: 33 },
	6: { name: "Александра", lastname: "Солнцева", id: 90 },
};

export function getUser(userId) {
  for( let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}
export function getUsers() {
  return users;
}
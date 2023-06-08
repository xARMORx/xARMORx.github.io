const functions = [
  {
      name: 'isSampInit',
      description: 'Проверяет инициализирован ли SAMP',
      example: "local result = isSampInit()"
  },
  {
      name: 'getPlayerCount',
      description: 'Возвращает количество игроков на сервере',
      example: "local count = getPlayerCount()"
  },
  {
      name: 'isLocalPlayerSpawned',
      description: 'Проверяет заспавнился ли игрок',
      example: "local result = isLocalPlayerSpawned()"
  },
  {
      name: 'isPlayerConnected',
      description: 'Проверяет подключен ли игрок к серверу',
      example: "local result = isPlayerConnected(int id)"
  },
  {
      name: 'getPlayerNickName',
      description: 'Возвращает имя игрока по его ID',
      example: "local name = getPlayerNickName(int id)"
  },
  {
      name: 'getPlayerPing',
      description: 'Возвращает пинг игрока по его ID',
      example: "local pint = getPlayerPing(int id)"
  },
  {
      name: 'getPlayerScore',
      description: 'Возвращает количество очков игрока по его ID',
      example: "local score = getPlayerScore(int id)"
  },
  {
      name: 'addChatMessage',
      description: 'Отправляет сообщение в чат',
      example: "addChatMessage(string szMessage, uint messageColor)"
  },
  {
      name: 'getChatMode',
      description: 'Возвращает режим чата',
      example: "local mode = getChatMode()"
  },
  {
      name: 'setChatMode',
      description: 'Устанавливает режим чата ( 0-2 )',
      example: "setChatMode(int mode)"
  },
  {
      name: 'getPageSize',
      description: 'Возвращает количество отображаемых строчек чата',
      example: "local size = getPageSize()"
  },
  {
      name: 'setChatScrollBarPos',
      description: 'Устанавливает позицию курсора чата',
      example: "setChatScrollBarPos(int position)"
  },
  {
      name: 'scrollChatScrollBar',
      description: 'Прокручивает курсор чата на указаное количество строк',
      example: "scrollChatScrollBar(int count)"
  },
  {
      name: 'getChatScrollBarPos',
      description: 'Возвращает позицию курсора чата',
      example: "local position = getChatScrollBarPos()"
  },
  {
      name: 'setChatString',
      description: 'Устанавливает параметры строке чата по её ID',
      example: "setChatString(int id, string szText, string szPrefix, uint textColor, uint prefixColor)"
  },
  {
      name: 'showDialog',
      description: 'Показывает диалог с указаными параметрами',
      example: "showDialog(int id, int style, string szTitle, string szText, string szLeftButton, string szRightButton)"
  },
  {
      name: 'closeDialogWithButton',
      description: 'Закрывает диалог указанной кнопкой ( 0-1 )',
      example: "closeDialogWithButton(int buttonId)"
  },
  {
      name: 'getDialogTitle',
      description: 'Возвращает название диалога',
      example: "local title = getDialogTitle()"
  },
  {
      name: 'getDialogStyle',
      description: 'Возвращает стиль диалога',
      example: "local style = getDialogStyle()"
  },
  {
      name: 'getDialogId',
      description: 'Возвращает ID диалога',
      example: "local id = getDialogId()"
  },
  {
      name: 'getDialogText',
      description: 'Возвращает текст диалога',
      example: "local text = getDialogText()"
  },
  {
      name: 'isDialogActive',
      description: 'Проверяет активен ли диалог',
      example: "local result = isDialogActive()"
  },
  {
      name: 'getDialogEditBoxText',
      description: 'Возвращает текст из инпута диалога',
      example: "local text = getDialogEditBoxText()"
  },
  {
      name: 'setDialogEditBoxText',
      description: 'Устанавливает текст в инпут диалога',
      example: "setDialogEditBoxText(string szText)"
  },
  {
      name: 'getDialogListBoxCount',
      description: 'Возвращает количество кнопок в List диалоге',
      example: "local listCount = getDialogListBoxCount()"
  },
  {
      name: 'setDialogListBoxIndex',
      description: 'Устанавливает позицию кнопки в List диалоге',
      example: "setDialogListBoxIndex(int position)"
  },
  {
      name: 'getDialogListBoxIndex',
      description: 'Возвращает номер текущей кнопки List диалога',
      example: "local listNumber = getDialogListBoxIndex()"
  },
  {
      name: 'isDialogClientside',
      description: 'Проверяет является ли диалог клиентским',
      example: "local result = isDialogClientside()"
  },
  {
      name: 'setChatInputText',
      description: 'Устанавливает текст в окно ввода чата',
      example: "setChatInputText(string szText)"
  },
  {
      name: 'getChatInputText',
      description: 'Возвращает текст из окна ввода чата',
      example: "local text = getChatInputText()"
  },
  {
      name: 'isChatInputActive',
      description: 'Проверяет включено ли окно ввода чата',
      example: "local result = isChatInputActive()"
  },
  {
      name: 'setChatInputState',
      description: 'Устанавливает статус активности окну ввода чата',
      example: "setChatInputState(bool state)"
  },
  {
      name: 'unRegisterChatCommand',
      description: 'Удаляет зарегистрированную комманду',
      example: "unRegisterChatCommand(string szName)"
  },
  {
      name: 'registerChatCommand',
      description: 'Регистрирует комманду с указаными параметрами ( Пока что возможны баги/краши )',
      example: "registerChatCommand(string szName, function name)"
  },
  {
      name: 'addRecall',
      description: 'Добавляет текст в RecallBuffer окна ввода чата',
      example: "addRecall(string szText)"
  },
  {
      name: 'getVehicleHandleById',
      description: 'Возвращает хендл автомобиля по его ID',
      example: "local handle = getVehicleHandleById(int id)"
  },
  {
      name: 'getVehicleIdByHandle',
      description: 'Возвращает ID автомобиля по его хендлу',
      example: "local id = getVehicleIdByHandle(handle vehicleHandle)"
  },
  {
      name: 'doesVehicleExistById',
      description: 'Проверяет существует ли автомобиль по его ID',
      example: "local result = doesVehicleExistById(int id)"
  },
  {
      name: 'getPlayerIdByHandle',
      description: 'Возвращает ID игрока по его хендлу',
      example: "local id = getPlayerIdByHandle(handle playerHandle)"
  },
  {
      name: 'getPlayerHandleById',
      description: 'Возвращает хендл игрока по его ID',
      example: "local handle = getPlayerHandleById(int id)"
  },
  {
      name: 'killPlayerById',
      description: 'Убивает игрока по его ID',
      example: "killPlayerById(int id)"
  },
  {
      name: 'killPlayerByHandle',
      description: 'Убивает игрока по его хендлу',
      example: "killPlayerByHandle(handle playerHandle)"
  },
  {
      name: 'sendSpawn',
      description: 'Спавнит игрока',
      example: "local result = sendSpawn()"
  },
  {
      name: 'isPlayerNPC',
      description: 'Проверяет является ли игрок NPC по его ID',
      example: "local result = isPlayerNPC(int id)"
  },
  {
      name: 'getPlayerVehicleSeatById',
      description: 'Возвращает номер сидения игрока по его ID',
      example: "local seatId = getPlayerVehicleSeatById(int id)"
  },
  {
      name: 'setLocalPlayerName',
      description: 'Устанавливает имя локальному игроку',
      example: "setLocalPlayerName(string szName)"
  },
  {
      name: 'getPlayerSpecialAction',
      description: 'Возвращает специальное действие игрока по его ID',
      example: "local specialAction = getPlayerSpecialAction(int id)"
  },
  {
      name: 'getPlayerVehicleSeatByHandle',
      description: 'Возвращает номер сидения игрока по хендлу игрока',
      example: "local seatId = getPlayerVehicleSeatByHandle(handle playerHandle)"
  },
  {
      name: 'getPlayerVehicleId',
      description: 'Возвращает ID автомобиля игрока по его ID',
      example: "local vehicleId = getPlayerVehicleId(int playerId)"
  },
  {
      name: 'deletePlayerById',
      description: 'Удаляет игрока по его ID',
      example: "local result = deletePlayerById(int id)"
  },
  {
      name: 'deletePlayerByHandle',
      description: 'Удаляет игрока по его хендлу',
      example: "local result = deletePlayerByHandle(handle playerHandle)"
  },
  {
      name: 'getPlayerColor',
      description: 'Возвращает цвет игрока из Tab в формате RGBA',
      example: "local color = getPlayerColor(int id)"
  },
  {
      name: 'getDistanceToPlayer',
      description: 'Возвращает дистанцию между локальным и указанным игроками',
      example: "local dist = getDistanceToPlayer(int id)"
  },
  {
      name: 'getPlayerHealth',
      description: 'Возвращает количество ХП игрока',
      example: "local health = getPlayerHealth(int id)"
  },
  {
      name: 'getPlayerArmour',
      description: 'Возвращает количество брони игрока',
      example: "local armour = getPlayerArmour(int id)"
  },
  {
      name: 'getScoreboardState',
      description: 'Возвращает статус таблицы Tab',
      example: "local state = getScoreboardState()"
  },
  {
      name: 'setScoreboardListBoxIndex',
      description: 'Устанавливает позицию листа в Tab по её номеру',
      example: "setScoreboardListBoxIndex(int position)"
  },
  {
      name: 'setCursorMode',
      description: 'Устанавливает режим SAMP курсора ( 1 - 4 )',
      example: "setCursorMode(int mode)"
  },
  {
      name: 'toggleCursor',
      description: 'Переключает режим SAMP курсора',
      example: "toggleCursor(bool status)"
  },
  {
      name: 'getCursorMode',
      description: 'Возвращает режим SAMP курсора',
      example: "local cursorMode = getCursorMode()"
  },
  {
      name: 'getServerAddress',
      description: 'Возвращает IP сервера',
      example: "local serverAddress = getServerAddress()"
  },
  {
      name: 'getServerName',
      description: 'Возвращает название сервера',
      example: "local serverName = getServerName()"
  },
  {
      name: 'getServerPort',
      description: 'Возвращает порт сервера',
      example: "local serverPort = getServerPort()"
  },
  {
      name: 'getGameState',
      description: 'Возвращает статус игры',
      example: "local gameState = getGameState()"
  },
  {
      name: 'setGameState',
      description: 'Устанавливает статус игры',
      example: "setGameState(int state)"
  },
  {
      name: 'delete3dText',
      description: 'Удаляет 3d Текст по его ID',
      example: "delete3dText(int ID)"
  },
  {
      name: 'create3dText',
      description: 'Создает 3d Текст с задаными параметрами',
      example: "create3dText(int nId, string szText, int color, float x, float y, float z, float fDrawDistance, bool bBehindWalls, int nAttachedToPlayer, int nAttachedToVehicle)"
  },
];

const functionsContainer = document.getElementById("functions-container");
const searchInput = document.getElementById("search-input");

// функция, которая отображает все функции на странице
function displayAllFunctions() {
functionsContainer.innerHTML = "";

for (let i = 0; i < functions.length; i++) {
  const functionDiv = createFunctionElement(functions[i]);
  functionsContainer.appendChild(functionDiv);
}
}

// функция, которая создает элементы для одной функции
function createFunctionElement(func) {
const functionDiv = document.createElement("div");
functionDiv.classList.add("section");

const functionName = document.createElement("h2");
functionName.classList.add("function-name");
functionName.textContent = func.name;
functionDiv.appendChild(functionName);

const functionDescription = document.createElement("p");
functionDescription.classList.add("function-description");
functionDescription.textContent = func.description;
functionDiv.appendChild(functionDescription);

const exampleContainer = document.createElement("div");
exampleContainer.classList.add("example-container");
functionDiv.appendChild(exampleContainer);

const exampleCode = document.createElement("code");
exampleCode.classList.add("function-example");
exampleCode.textContent = func.example;
exampleContainer.appendChild(exampleCode);

return functionDiv;
}

// обработчик события ввода текста в поле поиска
searchInput.addEventListener("input", function() {
const searchText = searchInput.value.trim().toLowerCase();
if (searchText.length === 0) {
  displayAllFunctions();
  return;
}

functionsContainer.innerHTML = "";
for (let i = 0; i < functions.length; i++) {
  const func = functions[i];
  if (func.name.toLowerCase().includes(searchText) || func.description.toLowerCase().includes(searchText)) {
    const functionDiv = createFunctionElement(func);
    functionsContainer.appendChild(functionDiv);
  }
}
});

// отображаем все функции при первой загрузке страницы
displayAllFunctions();
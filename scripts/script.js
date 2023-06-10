const functions = [
  {
      name: 'isSampInit',
      description: 'Проверяет инициализирован ли SAMP',
      example: "local result = isSampInit()"
  },
  {
      name: 'sampGetPlayerCount',
      description: 'Возвращает количество игроков на сервере',
      example: "local count = sampGetPlayerCount()"
  },
  {
      name: 'sampIsLocalPlayerSpawned',
      description: 'Проверяет заспавнился ли игрок',
      example: "local result = sampIsLocalPlayerSpawned()"
  },
  {
      name: 'sampIsPlayerConnected',
      description: 'Проверяет подключен ли игрок к серверу',
      example: "local result = sampIsPlayerConnected(int id)"
  },
  {
      name: 'sampGetPlayerNickName',
      description: 'Возвращает имя игрока по его ID',
      example: "local name = sampGetPlayerNickName(int id)"
  },
  {
      name: 'sampGetPlayerPing',
      description: 'Возвращает пинг игрока по его ID',
      example: "local pint = sampGetPlayerPing(int id)"
  },
  {
      name: 'sampGetPlayerScore',
      description: 'Возвращает количество очков игрока по его ID',
      example: "local score = sampGetPlayerScore(int id)"
  },
  {
      name: 'sampAddChatMessage',
      description: 'Отправляет сообщение в чат',
      example: "sampAddChatMessage(string szMessage, uint messageColor)"
  },
  {
      name: 'sampGetChatMode',
      description: 'Возвращает режим чата',
      example: "local mode = sampGetChatMode()"
  },
  {
      name: 'sampSetChatMode',
      description: 'Устанавливает режим чата\
      \n0 - Чат отключен\
      \n1 - Чат без обводки\
      \n2 - Обычный чат',
      example: "sampSetChatMode(int mode)"
  },
  {
      name: 'sampSetPageSize',
      description: 'Возвращает количество отображаемых строчек чата',
      example: "local size = sampGetPageSize()"
  },
  {
      name: 'sampSetChatScrollBarPos',
      description: 'Устанавливает позицию курсора чата',
      example: "sampSetChatScrollBarPos(int position)"
  },
  {
      name: 'sampScrollChatScrollBar',
      description: 'Прокручивает курсор чата на указаное количество строк',
      example: "scrollChatScrollBar(int count)"
  },
  {
      name: 'sampGetChatScrollBarPos',
      description: 'Возвращает позицию курсора чата',
      example: "local position = getChatScrollBarPos()"
  },
  {
      name: 'sampSetChatString',
      description: 'Устанавливает параметры строке чата по её ID',
      example: "sampSetChatString(int id, string szText, string szPrefix, uint textColor, uint prefixColor)"
  },
  {
      name: 'sampGetChatString',
      description: 'Возвращает параметры строке чата по её ID',
      example: "local szText, szPrefix, textColor, prefixColor = sampGetChatString(int id)"
  },
  {
      name: 'sampShowDialog',
      description: 'Показывает диалог с указаными параметрами',
      example: "sampShowDialog(int id, int style, string szTitle, string szText, string szLeftButton, string szRightButton)"
  },
  {
      name: 'sampCloseDialogWithButton',
      description: 'Закрывает диалог указанной кнопкой ( 0-1 )',
      example: "sampCloseDialogWithButton(int buttonId)"
  },
  {
      name: 'sampGetDialogTitle',
      description: 'Возвращает название диалога',
      example: "local title = sampGetDialogTitle()"
  },
  {
      name: 'sampGetDialogStyle',
      description: 'Возвращает стиль диалога',
      example: "local style = sampGetDialogStyle()"
  },
  {
      name: 'sampGetDialogId',
      description: 'Возвращает ID диалога',
      example: "local id = sampGetDialogId()"
  },
  {
      name: 'sampGetDialogText',
      description: 'Возвращает текст диалога',
      example: "local text = sampGetDialogText()"
  },
  {
      name: 'sampIsDialogActive',
      description: 'Проверяет активен ли диалог',
      example: "local result = sampIsDialogActive()"
  },
  {
      name: 'sampGetDialogEditBoxText',
      description: 'Возвращает текст из инпута диалога',
      example: "local text = sampGetDialogEditBoxText()"
  },
  {
      name: 'sampSetDialogEditBoxText',
      description: 'Устанавливает текст в инпут диалога',
      example: "sampSetDialogEditBoxText(string szText)"
  },
  {
      name: 'sampGetDialogListBoxCount',
      description: 'Возвращает количество кнопок в List диалоге',
      example: "local listCount = sampGetDialogListBoxCount()"
  },
  {
      name: 'sampSetDialogListBoxIndex',
      description: 'Устанавливает позицию кнопки в List диалоге',
      example: "sampSetDialogListBoxIndex(int position)"
  },
  {
      name: 'sampGetDialogListBoxIndex',
      description: 'Возвращает номер текущей кнопки List диалога',
      example: "local listNumber = sampGetDialogListBoxIndex()"
  },
  {
      name: 'sampIsDialogClientside',
      description: 'Проверяет является ли диалог клиентским',
      example: "local result = sampIsDialogClientside()"
  },
  {
      name: 'sampSetChatInputText',
      description: 'Устанавливает текст в окно ввода чата',
      example: "sampSetChatInputText(string szText)"
  },
  {
      name: 'sampGetChatInputText',
      description: 'Возвращает текст из окна ввода чата',
      example: "local text = sampGetChatInputText()"
  },
  {
      name: 'sampIsChatInputActive',
      description: 'Проверяет включено ли окно ввода чата',
      example: "local result = sampIsChatInputActive()"
  },
  {
      name: 'sampSetChatInputState',
      description: 'Устанавливает статус активности окну ввода чата',
      example: "sampSetChatInputState(bool state)"
  },
  {
      name: 'sampRegisterChatCommand',
      description: 'Регистрирует комманду с указаными параметрами ( Пока что возможны баги/краши )',
      example: "sampRegisterChatCommand(string szName, function name)"
  },
  {
      name: 'sampAddRecall',
      description: 'Добавляет текст в RecallBuffer окна ввода чата',
      example: "sampAddRecall(string szText)"
  },
  {
      name: 'sampGetVehicleHandleById',
      description: 'Возвращает хендл автомобиля по его ID',
      example: "local handle = sampGetVehicleHandleById(int id)"
  },
  {
      name: 'sampGetVehicleIdByHandle',
      description: 'Возвращает ID автомобиля по его хендлу',
      example: "local id = sampGetVehicleIdByHandle(handle vehicleHandle)"
  },
  {
      name: 'sampDoesVehicleExistById',
      description: 'Проверяет существует ли автомобиль по его ID',
      example: "local result = sampDoesVehicleExistById(int id)"
  },
  {
      name: 'sampGetPlayerIdByHandle',
      description: 'Возвращает ID игрока по его хендлу',
      example: "local id = sampGetPlayerIdByHandle(handle playerHandle)"
  },
  {
      name: 'sampGetPlayerHandleById',
      description: 'Возвращает хендл игрока по его ID',
      example: "local handle = sampGetPlayerHandleById(int id)"
  },
  {
      name: 'sampKillPlayerById',
      description: 'Убивает игрока по его ID',
      example: "sampKillPlayerById(int id)"
  },
  {
      name: 'sampKillPlayerByHandle',
      description: 'Убивает игрока по его хендлу',
      example: "sampKillPlayerByHandle(handle playerHandle)"
  },
  {
      name: 'sampSendSpawn',
      description: 'Спавнит игрока',
      example: "local result = sampSendSpawn()"
  },
  {
      name: 'sampIsPlayerNPC',
      description: 'Проверяет является ли игрок NPC по его ID',
      example: "local result = sampIsPlayerNPC(int id)"
  },
  {
      name: 'sampGetPlayerVehicleSeatById',
      description: 'Возвращает номер сидения игрока по его ID',
      example: "local seatId = sampGetPlayerVehicleSeatById(int id)"
  },
  {
      name: 'sampSetLocalPlayerName',
      description: 'Устанавливает имя локальному игроку',
      example: "sampSetLocalPlayerName(string szName)"
  },
  {
      name: 'sampGetPlayerSpecialAction',
      description: 'Возвращает специальное действие игрока по его ID',
      example: "local specialAction = sampGetPlayerSpecialAction(int id)"
  },
  {
      name: 'sampGetPlayerVehicleSeatByHandle',
      description: 'Возвращает номер сидения игрока по хендлу игрока',
      example: "local seatId = sampGetPlayerVehicleSeatByHandle(handle playerHandle)"
  },
  {
      name: 'sampGetPlayerVehicleId',
      description: 'Возвращает ID автомобиля игрока по его ID',
      example: "local vehicleId = sampGetPlayerVehicleId(int playerId)"
  },
  {
      name: 'sampDeletePlayerById',
      description: 'Удаляет игрока по его ID',
      example: "local result = sampDeletePlayerById(int id)"
  },
  {
      name: 'sampDeletePlayerByHandle',
      description: 'Удаляет игрока по его хендлу',
      example: "local result = sampDeletePlayerByHandle(handle playerHandle)"
  },
  {
      name: 'sampGetPlayerColor',
      description: 'Возвращает цвет игрока из Tab в формате RGBA',
      example: "local color = sampGetPlayerColor(int id)"
  },
  {
      name: 'sampGetDistanceToPlayer',
      description: 'Возвращает дистанцию между локальным и указанным игроками',
      example: "local dist = sampGetDistanceToPlayer(int id)"
  },
  {
      name: 'sampGetPlayerHealth',
      description: 'Возвращает количество ХП игрока',
      example: "local health = sampGetPlayerHealth(int id)"
  },
  {
      name: 'sampGetPlayerArmour',
      description: 'Возвращает количество брони игрока',
      example: "local armour = sampGetPlayerArmour(int id)"
  },
  {
      name: 'sampGetScoreboardState',
      description: 'Возвращает статус таблицы Tab',
      example: "local state = sampGetScoreboardState()"
  },
  {
      name: 'sampSetScoreboardListBoxIndex',
      description: 'Устанавливает позицию листа в Tab по её номеру',
      example: "sampSetScoreboardListBoxIndex(int position)"
  },
  {
      name: 'sampSetCursorMode',
      description: 'Устанавливает режим SAMP курсора\
      \n0 - Курсор отключен\
      \n1 - Управление клавиатурой заблокировано, курсор отключен\
      \n2 - Управление клавиатурой и мышкой заблокировано, курсор включен\
      \n3 - Управление мышкой заблокировано, курсор включен\
      \n4 - Управление мышкой заблокировано, курсор отключен',
      example: "sampSetCursorMode(int mode)"
  },
  {
      name: 'sampToggleCursor',
      description: 'Переключает режим SAMP курсора',
      example: "sampToggleCursor(bool status)"
  },
  {
      name: 'sampGetCursorMode',
      description: 'Возвращает режим SAMP курсора',
      example: "local cursorMode = sampGetCursorMode()"
  },
  {
      name: 'sampGetServerAddress',
      description: 'Возвращает IP сервера',
      example: "local address, port = sampGetServerAddress()"
  },
  {
      name: 'sampGetServerName',
      description: 'Возвращает название сервера',
      example: "local serverName = sampGetServerName()"
  },
  {
      name: 'sampGetGameState',
      description: 'Возвращает статус игры',
      example: "local gameState = sampGetGameState()"
  },
  {
      name: 'sampSetGameState',
      description: 'Устанавливает статус игры\
      \n0 - GAMESTATE_NONE\
      \n1 - GAMESTATE_WAIT_CONNECT\
      \n2 - GAMESTATE_AWAIT_JOIN\
      \n3 - GAMESTATE_CONNECTED\
      \n4 - GAMESTATE_RESTARTING\
      \n5 - GAMESTATE_DISCONNECTED',
      example: "sampSetGameState(int state)"
  },
  {
      name: 'sampDelete3dText',
      description: 'Удаляет 3d Текст по его ID',
      example: "sampDelete3dText(int ID)"
  },
  {
      name: 'sampCreate3dText',
      description: 'Создает 3d Текст с задаными параметрами',
      example: "sampCreate3dText(int nId, string szText, int color, float x, float y, float z, float fDrawDistance, bool bBehindWalls, int nAttachedToPlayer, int nAttachedToVehicle)"
  },
  {
      name: 'sampDoesExist3dText',
      description: 'Проверяет 3d Текст на существование',
      example: "local result = sampCreate3dText(int nId)"
  },
  {
      name: 'sampGet3dTextInfo',
      description: 'Возвращает данные о 3d Тексте',
      example: "local text, color, x, y, z, distance, behindWalls, attachedToPlayer, attachedToVehicle = sampGet3dTextInfo(int nId)"
  },
  {
      name: 'sampCreateChatBubble',
      description: 'Создает текст над головой указаного игрока',
      example: "sampCreateChatBubble(int nId, string szText, int color, float distance, int time)"
  },
  {
      name: 'sampGetChatBubbleInfo',
      description: 'Возвращает данные о тексте над головой указаного игрока',
      example: "local result, text, color, time = sampGetChatBubbleInfo(int nId)"
  },
  {
      name: 'unload',
      description: 'Выгружает комманды которые регистрировал скрипт.',
      example: "addEventHandler(\"onScriptTerminate\", function(scr, quit) \n\tif scr == thisScript() then unload() end end)"
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

function createFunctionElement(func) {
    const functionDiv = document.createElement("div");
    functionDiv.classList.add("section");

    const functionName = document.createElement("h2");
    functionName.classList.add("function-name");
    functionName.textContent = func.name;
    functionDiv.appendChild(functionName);

    const functionDescription = document.createElement("p");
    functionDescription.classList.add("function-description");
    functionDescription.innerHTML = func.description.replace(/\n/g, '<br>');
    functionDiv.appendChild(functionDescription);

    const exampleContainer = document.createElement("div");
    exampleContainer.classList.add("example-container");
    functionDiv.appendChild(exampleContainer);

    const exampleCode = document.createElement("code");
    exampleCode.classList.add("function-example");
    exampleCode.innerHTML = func.example.replace(/\n/g, '<br>');
    exampleContainer.appendChild(exampleCode);

    hljs.highlightElement(exampleCode, { language: "lua" });

    const button = document.createElement('button');
    button.classList.add('copy-button');
    button.innerHTML = '<i class="icon-copy"></i>';
    button.onclick = () => copyCode(exampleCode.textContent);
    exampleCode.appendChild(button);

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

// функция, которая копирует код в буфер обмена
function copyCode(code) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // добавляем уведомление о копировании текста
    const notification = document.createElement('div');
    notification.textContent = 'Текст скопирован';
    notification.classList.add('copy-notification');
    document.body.appendChild(notification);

    // удаляем уведомление через 2 секунды
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 5000);
}

// отображаем все функции при первой загрузке страницы
displayAllFunctions();
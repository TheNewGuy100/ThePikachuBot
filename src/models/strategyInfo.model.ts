

export class StrategyInfoModel {
    description: string;
    type: 'admin' | 'passive' | 'active' | 'entry' | 'event' | 'config';
}

export const typeToString = {
    'admin': {
        text: '📠 ***Commandos Administrador Ativos***',
        position: 1
    },
    'passive': {
        text:'☑️ ***Funções Passivas Ativas***',
        position: 2
    },
    'active': {
        text:'📰 ***Comandos Gerais Ativos***',
        position: 0
    },
    'entry': {
        text: '🦾 ***Pipeline de Inicialização***',
        position: 3
    },
    'event': {
        text: '👑 ***Handlers de Eventos***',
        position: 5
    },
    'config': {
        text: '⚗️ ***Configurações do Bot***',
        position: 4
    }
}

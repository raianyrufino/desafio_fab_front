import { formatRelative, formatDistance, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

/**
 * @param {string} data string no formato AAAA-MM-DD HH:MM:S
 * @param {boolean} diff true para retornar a diferença da data passada em relação a data atual
 * @return {string} data em um formato legível para humanos
 */
export function dataParaHumano(data, diff = false) {
  if (diff) {
    return formatDistance(new Date(data), new Date(), { locale: ptBR });
  }
  return formatRelative(new Date(data), new Date(), { locale: ptBR });
}

/**
 * @param {string} data string no formato AAAA-MM-DD HH:MM:S
 * @param {string} formato formato baseado no padrão unicode
 * @return {string} data formatada
 */
export function formataData(data, formato = "dd/MM/yyyy 'às' HH:mm:ss") {
  return format(new Date(data), formato, { locale: ptBR });
}

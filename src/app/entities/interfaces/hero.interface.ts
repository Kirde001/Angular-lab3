/**
 *  Интрефейс настоящих неубиваемых героев, универсальный интерфейс
 *
 * @param { string } name - имя героя
 * @param { number } level - уровень героя
 * @param { number } strength - сила героя
 * @param { string[] } skills - способности
 */

export interface IAmRealHero {
    name: string;
    level: number;
    strength: number;
    skills: string[];
}
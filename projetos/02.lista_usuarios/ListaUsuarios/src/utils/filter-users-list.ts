import { isWithinInterval } from 'date-fns';
import { IFilterOptions } from '../interfaces/filter/filter-options.interface';
import { IUser } from '../interfaces/users/user.interface';

/**
 * Realiza as regras de filtragem
 * @param filter - Filtros passados
 * @param usersList - Lista de usuários originais
 * @returns - Lista filtrada
 */
const filterUsersList = (
  filter: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filter.name, usersList);
  filteredList = filterUsersListByStatus(filter.status, filteredList);
  filteredList = filterUsersListByDate(
    filter.startDate,
    filter.endDate,
    filteredList
  );

  return filteredList;
};

/**
 * Filtro por nome do usuário
 * @param name - Nome filtrado
 * @param usersList - Lista original
 * @returns - Lista filtrada por nome
 */
const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  if (name === undefined) {
    return usersList;
  }

  return usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );
};

/**
 * Filtro por status do usuário
 * @param status - Status filtrado
 * @param filteredList - Lista filtrada (por filtros anteriores)
 * @returns - Lista filtrada (filtros anteriores + status)
 */
const filterUsersListByStatus = (
  status: boolean | undefined,
  filteredList: IUser[]
): IUser[] => {
  if (status === undefined) {
    return filteredList;
  }

  return filteredList.filter((user) => user.ativo === status);
};

/**
 * Filtro por data de cadastro do usuário
 * @param startDate - Data inicial
 * @param endDate - Data final
 * @param filteredList - Lista filtrada (por filtros anteriores)
 * @returns - Lista filtrada (filtros anteriores + data cadastro)
 */
const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  filteredList: IUser[]
): IUser[] => {
  if (startDate === undefined || endDate === undefined) {
    return filteredList;
  }

  return filteredList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    })
  );
};

export { filterUsersList };

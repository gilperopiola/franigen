import { Template as CreateEntrypointTemplate } from './entrypoint/create'
import { Template as UpdateEntrypointTemplate } from './entrypoint/update'
import { Template as DeleteEntrypointTemplate } from './entrypoint/delete'
import { Template as SingleEntrypointTemplate } from './entrypoint/single'
import { Template as SelectEntrypointTemplate } from './entrypoint/select'

import { Template as CreateUseCaseTemplate } from './usecase/create'
import { Template as UpdateUseCaseTemplate } from './usecase/update'
import { Template as DeleteUseCaseTemplate } from './usecase/delete'
import { Template as SingleUseCaseTemplate } from './usecase/single'
import { Template as SelectUseCaseTemplate } from './usecase/select'

import { Template as CreateContractTemplate } from './contract/create'
import { Template as UpdateContractTemplate } from './contract/update'
import { Template as DeleteContractTemplate } from './contract/delete'
import { Template as SingleContractTemplate } from './contract/single'
import { Template as SelectContractTemplate } from './contract/select'

import { Template as CreateRepositoryTemplate } from './repository/create'
import { Template as UpdateRepositoryTemplate } from './repository/update'
import { Template as DeleteRepositoryTemplate } from './repository/delete'
import { Template as SingleRepositoryTemplate } from './repository/single'
import { Template as SelectRepositoryTemplate } from './repository/select'

export const Templates = {
  EntrypointCreate: CreateEntrypointTemplate,
  EntrypointUpdate: UpdateEntrypointTemplate,
  EntrypointDelete: DeleteEntrypointTemplate,
  EntrypointSingle: SingleEntrypointTemplate,
  EntrypointSelect: SelectEntrypointTemplate,

  UseCaseCreate: CreateUseCaseTemplate,
  UseCaseUpdate: UpdateUseCaseTemplate,
  UseCaseDelete: DeleteUseCaseTemplate,
  UseCaseSingle: SingleUseCaseTemplate,
  UseCaseSelect: SelectUseCaseTemplate,

  ContractCreate: CreateContractTemplate,
  ContractUpdate: UpdateContractTemplate,
  ContractDelete: DeleteContractTemplate,
  ContractSingle: SingleContractTemplate,
  ContractSelect: SelectContractTemplate,

  RepositoryCreate: CreateRepositoryTemplate,
  RepositoryUpdate: UpdateRepositoryTemplate,
  RepositoryDelete: DeleteRepositoryTemplate,
  RepositorySingle: SingleRepositoryTemplate,
  RepositorySelect: SelectRepositoryTemplate
}

import buildInfoModule from 'src/build-info.json';

import { TBuildInfo } from 'src/core/types/app/TBuildInfo';

const buildInfo: TBuildInfo = buildInfoModule;

const {
  currentTimeStr,
  currentTimeTag,
  gitBranch,
  gitCommitHash,
  projectName,
  timestamp,
  timetag,
  version,
} = buildInfo;

export {
  currentTimeStr,
  currentTimeTag,
  gitBranch,
  gitCommitHash,
  projectName,
  timestamp,
  timetag,
  version,
};

<!--
@since 2024.06.05, 23:18
@changed 2024.06.05, 23:18
-->

# action-dialog-trainer-2409

Action trainer app.

- Version: 0.0.1
- Last changes timestamp: 2024.09.11 22:02 +0300

TODO: Add the project description.

## See also

- [CHANGELOG](CHANGELOG.md)
- [TODO](TODO.md)

## Resources

Repository: https://github.com/lilliputten/action-dialog-trainer-2409

Demo deploy server (with a recent build): https://action-dialog-trainer-2409.march.team/

## Project workflow

Install all required node dependencies:

```
npm i
```

Start dev server (locate in browser with `http://localhost:3000`):

```
npm run start
```

Make build:

```
npm run build
```

Build and publish:

For successful publishing the build application the environment should be
propeply set up (see npm script command `postinstall-publish-submodule`).

```
npm run build-and-publish
```

To just publish previously created build:

```
npm run publish
```

Builds published into the `publish` branch. See utilities configuration in
`utils/config.sh`.

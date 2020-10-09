# ASW Form Builder
`ASW Form Builder` helps you with rapid development and designed web forms which includes several controls and the key feature of `Form Builder` is to make your content attractive and effective. We can customize our control at run time and preview the same before final submission.
<br>
`Form Builder` is compatible with the latest version of Angular and Angular Material. Only a few clicks can create an attractive web form and provide a JSON Schema to render all controls.

## [API Demo](https://asoftwareworld.github.io/ASW-Form-Builder/#/)

## Installation
Below are some prerequisites before install `Form Builder`.

### Step 1: Install Angular Material
Install `Angular Material` to set up your project by running the following command:

```html
ng add @angular/material
```

### Step 2: Install Bootstrap
Install `Bootstrap` source Sass files to set up your project by running the following command:
```html
npm install bootstrap
```

### Step 3: Install ASW Form Builder
Install `Form Builder` to set up your project by running the following command:
```html
npm install @asoftwareworld/form-builder
```

### Step 4: Import the component modules
Import the NgModule for each component you want to use:
<br>
And then include it in your module (see [app.module.ts](https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/projects/form-builder-demo/src/app/app.module.ts) ):
```
import { FormBuilderModule } from '@asoftwareworld/form-builder';
// ...

@NgModule({
  imports: [
    // shown passing global defaults (optional)
    FormBuilderModule,
    ...
  ]
  // ...
})
export class AppModule {}
```
### Step 5: Include a theme

Including a theme is required to apply the form builder controls.

If you're using the Angular CLI, and you want to use themes globally in your application. Then you can add this to your `styles.css` or `angular.json`:

`styles.css or styles.scss`:

```html
@import '~@asoftwareworld/form-builder/theming/theming-bundle.scss';
```
or 

`angular.json`:
```html
"styles": [
  "./node_modules/@asoftwareworld/form-builder/theming/theming-bundle.scss"
],
```

If you are not using the Angular CLI, you can include a theme via a `<link>` element in your `index.html`.

In your template, use the component directive:
```
<asw-form-builder (publishClick)="saveJsonData($event)"></asw-form-builder>
```

Define in your component to get published event :

```
export class AppComponent {
  title = 'ASW Form Builder Demo';

  saveJsonData(data: any){
    //.... 
    console.log(data);
    // do something
  }
}
```
## Theme
Angular Material [more information](https://material.angular.io/components/categories) 
and Bootstrap [more information](https://getbootstrap.com/docs/4.0/getting-started/theming/)

## List of Controls available
| controls        | description                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| Header          | Headings are defined with the `<h1> to <h6>` tags. Used as a title of the post, template and resume, etc.       |
| Autocomplete    | The autocomplete is a normal text input enhanced by a panel of suggested relevant options as the user types.    |
| Textbox         | Enable native inputs to be used within a form field. The styles such as the underline, floating label.          |
| Text area       | Enable native inputs to be used within a form field. The styles such as the underline, floating label.          |
| Datepicker      | The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar. |
| Select          | Allows the user to select only one option using dropdown.                                                       |
| Multi select    | Allows the user to select one or more options using dropdown.                                                   |
| Radio button    | Allows the user to select only one option from a group.                                                         |
| Checkbox button | Use multi select check box or single checkbox and captures boolean input with an optional indeterminate mode.   |
| Button          | Angular Material interactive button with a range of presentation options.                                       |
| Paragraph       | Paragraphs are the building blocks of papers.                                                                   |
| Divider         | Create a horizontal or vertical line styled with a Angular Material theme                                       |
| Slide toggle    | Is an on/off control that can be toggled via clicking and draggable switch.                                     |
| Grid            | **Coming soon**                                                                                                 |
| Material icon   | **Coming soon**                                                                                                 |


## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 11 ✔                                                                                                                         |

## [Report a bug](https://github.com/asoftwareworld/ASW-Form-Builder/issues)
We use GitHub Issues as the official bug tracker for the ASW Form Builder. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the ASW Form Builder.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions
If you have questions or need help please email me `asoftwareworld@gmail.com`

## License
[MIT](https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/LICENSE)

## Donate
<a href="https://paypal.me/asoftwareworld?locale.x=en_GB"><img src="blue.svg" height="40"></a>  
If you found value in `ASW Form Builder` or a contributor helped you out of a jam, consider becoming a contributor yourself.

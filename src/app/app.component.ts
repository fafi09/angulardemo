import { Component,ViewChild } from '@angular/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup/popup.component';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('tree') tree;
  title = 'my-app';
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {isExpandedField: 'isExpanded', useCheckbox:true,
  useTriState: false, //useCheckbox Disconnecting parent <=> child connection
  rtl: false,
  displayField: 'name',
  actionMapping: {
    mouse: {
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      },
      //checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
      checkboxClick:(tree, node, $event) => {
        alert(tree);
      }
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => {
        node.expandAll();
      }
    }
  },
  nodeHeight: 23,
  allowDrag: (node) => {
    return true;
  },
  allowDrop: (node) => {
    return true;
  },
  allowDragoverStyling: true,
  levelPadding: 10,
  useVirtualScroll: true,
  animateExpand: true,
  scrollOnActivate: true,
  animateSpeed: 30,
  animateAcceleration: 1.2,
  scrollContainer: document.documentElement // HTML
};

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }
}

import { Component } from '@angular/core';

interface Tree {
  root: TreeNode;
}

interface TreeNode {
  label: string;
  check?: boolean;
  children: TreeNode[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  public data: Tree;
  public selectedTreeNode: TreeNode | null;
  ngOnInit(): void {}
  // I initialize the app component.
  constructor() {
    this.selectedTreeNode = null;
    this.data = {
      root: {
        label: 'first',
        children: [
          {
            label: 'second-a',
            children: [
              {
                label: 'third-first',
                children: [
                  {
                    label: 'ferth',
                    children: [
                      {
                        label: 'fiver',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                label: 'third-first',
                children: [
                  {
                    label: 'ferth',
                    children: [
                      {
                        label: 'fiver',
                        children: [],
                      },
                      {
                        label: 'fiver',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: 'second-b',
            children: [
              {
                label: 'third',
                children: [],
              },
            ],
          },
        ],
      },
    };
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I select the given tree node, and log it to the console.
  public selectNode(node: TreeNode, value: boolean): void {
    this.check(node, value);
  }

  check(node: any, value: boolean) {
    node.check = value;
    if(node.children.length===0){
      console.log(node)
    }
    node.children.forEach((x: any) => {
      this.check(x, value);
      
    });
  }
}
 
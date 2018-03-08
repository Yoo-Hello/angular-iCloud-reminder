var myapp=angular.module('myapp',[]);
	myapp.controller('rdCtrl', ['$scope', function($scope){
		var d=localStorage.data;
		$scope.liebiao=d?JSON.parse(d):[];
		console.log($scope.liebiao)
		var del=localStorage.delete;
		$scope.color=["red","yellow","yellowgreen","pink","blue","orange"];
		$scope.cindex=0;
		$scope.indexTime=function(index){
			$scope.cindex=index;
		}
		$scope.indexTime(0);
		$scope.addItiem=function(){
			var data={
				name:"新列表"+ ($scope.liebiao.length+1),
				color:$scope.color[$scope.liebiao.length%6],
				items:[],
				completeject:[]
			}
			$scope.liebiao.push(data);
			localStorage.data=JSON.stringify($scope.liebiao);
		}
		/*删除列表*/
		$scope.deleteList=function(index){
			var cu=$scope.liebiao;
			var r=[];
			console.log(cu);
			for(var i=0;i<cu.length;i++){
				if(i != index){
					r.push(cu[i]);
				}
			}
			$scope.liebiao=r;
			localStorage.data=JSON.stringify($scope.liebiao)
		}
		//保存名称
		$scope.storageName=function(){
			localStorage.data=JSON.stringify($scope.liebiao);
		}
		/*点击增加项目*/
		$scope.addproject=function(){
			var cu=$scope.liebiao[$scope.cindex];
			var lists={
				name:"新项目",
				color:cu.color+'-nav'
			};
			console.log(typeof lists)
			$scope.liebiao[$scope.cindex].items.push(lists);
			localStorage.data=JSON.stringify($scope.liebiao);
		}
		/*点击删除项目*/
		$scope.deleteject=function(index){
			var cu=$scope.liebiao[$scope.cindex];
			var r=[];
			for(var i=0;i<cu.items.length;i++){
				if(i != index){
					r.push(cu.items[i])
				}
			}
			$scope.liebiao[$scope.cindex].items = r;
   			localStorage.data = JSON.stringify($scope.liebiao);
		}
		/*完成项目*/
		$scope.Projectreach=function(index){
			var r=$scope.liebiao[$scope.cindex].items.splice(index,1);
			$scope.liebiao[$scope.cindex].completeject.push(r[0]);
			localStorage.data=JSON.stringify($scope.liebiao);
		} 
		/*点击删除已完成项*/
		$scope.deleteOpen=function(index){
			var cu=$scope.liebiao[$scope.cindex];
			var r=[];
			for(var i=0;i<cu.completeject.length;i++){
				if(i != index){
					r.push(cu.completeject[i])
				}
			}
			$scope.liebiao[$scope.cindex].completeject = r;
   			localStorage.data = JSON.stringify($scope.liebiao);
		}
		/*查看完成项目*/
		$scope.openReach=function(){
			var reach = $(".reach").attr("value");
			if(reach == "none"){
				$(".reach").attr("value","block");
				$(".reach").css("display","block");
			}
			if(reach == "block"){
				$(".reach").attr("value","none");
				$(".reach").css("display","none");
			}
			
		}

	}])
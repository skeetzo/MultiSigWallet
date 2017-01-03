(
  function () {
    angular
    .module("multiSigWeb")
    .controller("removeWalletCtrl", function ($rootScope, $scope, $uibModalInstance, wallet, Wallet, Utils) {

      $scope.wallet = wallet;
      $scope.ok = function () {
        Wallet.removeWallet($scope.wallet.address);
        try{
          $rootScope.wallets = Wallet.getAllWallets();          
        }catch(err){
          console.log(err);
        }
        $uibModalInstance.close();
        Utils.success("The wallet has been removed successfully.");
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss();
      };

    });
  }
)();
